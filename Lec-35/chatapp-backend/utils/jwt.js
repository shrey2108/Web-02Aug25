const jwt = require('jsonwebtoken');

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

module.exports.generateToken = (data) => {
    const secret = JWT_ACCESS_SECRET;
    const expiresIn = JWT_EXPIRES_IN;
    if (!secret && !expiresIn) {
        throw new Error(`JWT_ACCESS_SECRET is not defined`);
    }
    const options = { expiresIn: expiresIn };
    return jwt.sign({ id: data.id, username: data.username }, secret, options);
};

module.exports.verifyToken = (token) => {
    let secret = JWT_ACCESS_SECRET;
    if (!secret) {
        throw new Error(`JWT_ACCESS_SECRET is not defined`);
    }
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
};

module.exports.decodeToken = (token) => {
    try {
        return jwt.decode(token);
    } catch (error) {
        throw new Error('Invalid token');
    }
};
