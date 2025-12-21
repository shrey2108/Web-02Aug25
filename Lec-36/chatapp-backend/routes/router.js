const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const conversationRoutes = require("./conversation.routes");
const userRoutes = require('./users.routes');
const messageRoutes = require('./message.routes');
const { auth } = require('../middlewares/auth');

router.use('/auth', authRoutes);
router.use('/conversations', conversationRoutes);
router.use('/users', userRoutes);
router.use('/messages', auth, messageRoutes);


module.exports = router;