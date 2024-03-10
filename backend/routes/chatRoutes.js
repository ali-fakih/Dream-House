const express = require('express');
const router = express.Router();
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup
} = require('../controllers/chatControllers');
const { protect, isAdmin, isAgentOrAdmin } = require('../middlewares/chatMiddleware');

// Route to access chat (one-to-one or group)
router.post('/access-chat', protect, accessChat);
// router.post('/access-chat', accessChat);

// Route to fetch all chats for a user
router.get('/fetch-chats', protect, fetchChats);

// Route to create a group chat
router.post('/create-group-chat', protect, createGroupChat);

// Route to rename a group chat
router.put('/rename-group/:chatId', protect, isAgentOrAdmin, renameGroup);

// Route to add a user to a group
router.post('/add-to-group', protect, isAgentOrAdmin, addToGroup);

// Route to remove a user from a group
router.put('/remove-from-group/:chatId', protect, isAgentOrAdmin, removeFromGroup);

module.exports = router;
