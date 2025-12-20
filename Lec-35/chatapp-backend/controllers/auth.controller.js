const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwt');
// You may want to update your jwt utils to support different token types

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        // Generate access
        const userData = { 
            id: user._id.toString(), 
            fullName: user.fullName,
            email: user.email
        };
        const accessToken = generateToken(userData);

        res.status(200).json({ accessToken, user: userData });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports.register = async (req, res) => {
    try {
        // Registration logic here
        const { fullName, email, password } = req.body;
        // Validate input, hash password, save user to database, etc.

        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({ fullName, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'You are registered successfully, Please login' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}