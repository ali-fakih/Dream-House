const asyncHandler = require('express-async-handler');
const Chat = require('../models/chatModel');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { protect, isAdmin, isAgentOrAdmin } = require('../middlewares/chatMiddleware');

//@description     Create or fetch One to One Chat
//@route           POST /chat/createchat
//@access          Protected
const accessChat = asyncHandler(async (req, res) => {
  // Your implementation here
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'UserId param not sent with request' });
  }

  try {
    let isChat = await Chat.find({
      isGroupChat: false,
      users: { $all: [req.user.id, userId] }
    })
      .populate('users', '-password')
      .populate('latestMessage');

    isChat = await User.populate(isChat, {
      path: 'latestMessage.sender',
      select: 'name pic email'
    });

    if (isChat.length > 0) {
      res.send(isChat[0]);
    } else {
      const chatData = {
        chatName: 'sender',
        isGroupChat: false,
        users: [req.user.id, userId]
      };

      const createdChat = await Chat.create(chatData);
      const fullChat = await Chat.findById(createdChat._id)
        .populate('users', '-password')
        .populate('latestMessage');

      res.status(200).json(fullChat);
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});


//@description     Fetch all chats for a user
//@route           GET /chat/getallchats
//@access          Protected
const fetchChats = asyncHandler(async (req, res) => {
  // Your implementation here
  try {
    const results = await Chat.find({
      users: req.user.id // Find chats where the user is a participant
    })
      .populate('users', '-password')
      .populate('groupAdmin', '-password')
      .populate('latestMessage')
      .sort({ updatedAt: -1 });

    // Filter out messages or chats that don't belong to the user
    const filteredResults = results.map(chat => {
      const userChats = chat.users.map(user => user._id.toString()); // Get IDs of users in the chat
      if (userChats.includes(req.user._id.toString())) { // Check if the user is a participant
        return chat; // Return the chat if the user is a participant
      }
    }).filter(Boolean); // Filter out undefined elements

    const populatedResults = await User.populate(filteredResults, {
      path: 'latestMessage.sender',
      select: 'name pic email'
    });

    res.status(200).send(populatedResults);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});


// @description     Create New Group Chat
// @route           POST /chat/create-groupchat
// @access          Protected
const createGroupChat = asyncHandler(async (req, res) => {
  // Your implementation here
  try {
    if (!req.body.users || !req.body.name) {
      return res.status(400).send({ message: 'Please fill all the fields' });
    }

    const users = req.body.users; // No need to parse JSON here

    if (users.length < 2) {
      return res.status(400).send('More than 2 users are required to form a group chat');
    }

    users.push(req.user);

    const groupChat = await Chat.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: req.user
    });

    const fullGroupChat = await Chat.findById(groupChat.id)
      .populate('users', '-password')
      .populate('groupAdmin', '-password');

    res.status(200).json(fullGroupChat);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});


// @desc    Rename Group
// @route   PUT /chat/rename-group
// @access  Protected
const renameGroup = asyncHandler(async (req, res) => {
  // Middleware to verify user role for renaming chat
  isAgentOrAdmin(req, res, async () => {
    try {
      // Your implementation here
      const { chatId, chatName } = req.body;

      const updatedChat = await Chat.findByIdAndUpdate(
        chatId,
        { chatName: chatName },
        { new: true }
      )
        .populate('users', '-password')
        .populate('groupAdmin', '-password');

      if (!updatedChat) {
        res.status(404).send('Chat Not Found');
      } else {
        res.json(updatedChat);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
});


// @desc    Remove user from Group
// @route   PUT /chat/remove-user-from-group
// @access  Protected
const removeFromGroup = asyncHandler(async (req, res) => {
  // Middleware to verify user role for adding/removing users from group
  isAgentOrAdmin(req, res, async () => {
    try {
      // Your implementation here
      const { chatId, userId } = req.body;

      const removed = await Chat.findByIdAndUpdate(
        chatId,
        { $pull: { users: userId } },
        { new: true }
      )
        .populate('users', '-password')
        .populate('groupAdmin', '-password');

      if (!removed) {
        res.status(404).send('Chat Not Found');
      } else {
        res.json(removed);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
});

// @desc    Add user to Group / Leave
// @route   POST /chat/add-to-group
// @access  Protected

const addToGroup = asyncHandler(async (req, res) => {
  try {
    // Extract parameters from the request body
    const { chatId, userId } = req.body;

    // Check if required parameters are provided
    if (!chatId || !userId) {
      return res.status(400).json({ message: "Missing chatId or userId in the request body" });
    }

    // Check if the user has permission to add users to the group
    isAgentOrAdmin(req, res, async () => {
      try {
        // Find the chat by ID and update to add the user
        const added = await Chat.findByIdAndUpdate(
          chatId,
          { $push: { users: userId } },
          { new: true }
        ).populate('users', '-password')
         .populate('groupAdmin', '-password');

        if (!added) {
          return res.status(404).send('Chat Not Found');
        } else {
          return res.json(added);
        }
      } catch (error) {
        console.error(error);
        return res.status(400).send({ message: error.message });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({ message: error.message });
  }
});



module.exports = {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
};
