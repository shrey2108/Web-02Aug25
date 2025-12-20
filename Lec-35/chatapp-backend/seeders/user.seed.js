require('dotenv').config();
const connectDB = require("../config/db");
const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
connectDB();

const names = [
  "Aarav Mehta", "Ananya Sharma", "Rohan Verma", "Priya Singh", "Kunal Gupta",
  "Neha Kapoor", "Aditya Malhotra", "Sneha Iyer", "Vikram Rao", "Pooja Nair",
  "Rahul Jain", "Kavya Aggarwal", "Siddharth Khanna", "Aditi Chawla", "Manish Patel",
  "Ishita Banerjee", "Amit Mishra", "Ritika Saxena", "Nikhil Arora", "Simran Kaur",
  "Varun Bansal", "Shreya Ghosh", "Mohit Saini", "Tanya Oberoi", "Deepak Yadav",
  "Rashmi Kulkarni", "Saurabh Pandey", "Meenal Joshi", "Arjun Desai", "Pallavi Naik",
  "Akash Tripathi", "Nisha Reddy", "Harsh Vardhan", "Swati Tiwari", "Gaurav Singhal",
  "Komal Mahajan", "Abhishek Dubey", "Anjali Roy", "Ravi Shukla", "Pankaj Tomar",
  "Shruti Pathak", "Sandeep Lodha", "Bhavya Shah", "Rohini Salvi", "Yogesh Pawar",
  "Namrata Kulkarni", "Rajeev Saxena", "Kritika Mathur", "Ashish Negi"
];

async function seedUsers() {
  await UserModel.deleteMany({});

  const dummy_users = names.map(name => ({
    fullName: name,
    email: name.toLowerCase().replace(" ", ".") + "@gmail.com",
    password: bcrypt.hashSync("1234", 10)
  }));

  console.log(dummy_users)

  const users = await UserModel.create(dummy_users);
  console.log("User seeded successfuly", users);
  process.exit(1);
}

seedUsers();
