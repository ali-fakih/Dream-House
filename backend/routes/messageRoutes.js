const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");


const router = express.Router();

router.route("/getallchatsforauser/:chatId").get( allMessages);
router.route("/send-message").post( sendMessage);

module.exports = router;
