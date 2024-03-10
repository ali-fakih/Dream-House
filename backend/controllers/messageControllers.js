const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");
const User = require("../models/user");
const Chat = require("../models/chatModel");

//@description     Get all Messages
//@route           GET /message/getallchatsforauser/:chatId
//@access          Protected
const allMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name pic email")
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

//@description     Create New Message
//@route           POST /message/send-message
//@access          Protected
const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId, senderId } = req.body; // Add senderId to destructuring

  if (!content || !chatId || !senderId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  var newMessage = {
    sender: senderId, // Set sender directly
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);

    message = await Message.findById(message.id)
      .populate("sender", "name pic")
      .populate("chat")
      .exec();

    message = await User.populate(message, {
      path: "chat.users",
      select: "name pic email",
    });

    await Chat.findByIdAndUpdate(chatId, { latestMessage: message }); // Use chatId directly

    res.json(message);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = { allMessages, sendMessage };
