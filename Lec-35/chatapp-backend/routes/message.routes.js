const router = require('express').Router();
const controller = require("../controllers/message.controller");

router.get("/:conversationId", controller.getMessages);
router.post("/", controller.sendMessage);

module.exports = router;