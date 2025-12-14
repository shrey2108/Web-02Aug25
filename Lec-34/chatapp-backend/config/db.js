const mongoose = require('mongoose');

const connectDB = async () => {
    const dbURI = process.env.MONGODB_URI;

    try {
        if (!dbURI) throw new Error('MONGODB_URI is not defined');
        await mongoose.connect(dbURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;