const api = require("../utils/api");
const jwt = require("jsonwebtoken");

module.exports.isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    if(!token)  return api.error(res, "Error", "Unauthorized", 401);

    const user = jwt.verify(token, process.env.JWT_SECRET);

    if(!user){
      return api.error(res, "Error", "Unauthorized", 401);
    }

    req.user = user;

    next();
  } catch (error) {
    api.error(res, error.message);
  }
}