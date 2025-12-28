const UserModel = require("../models/user.model");
const { verifyToken } = require("../utils/jwt");

async function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const payload = verifyToken(token);
    const user = await UserModel.findById(payload.id);
    if(!user) {
      res.status(404).json({
        success: false,
        message: "User not found"
      })
    }
    req.user = { id: payload.id };
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

function socketAuth(socket, next) {
  try {
    const header = socket.handshake.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    if (!token) return next(new Error("Unauthorized"));

    const payload = verifyToken(token);
    socket.user = { 
      id: payload.id,
      username: payload.username
    }
    next();    
  } catch (error) {
    next(new Error(error.message));
  }
}

module.exports = { 
  auth,
  socketAuth
};
