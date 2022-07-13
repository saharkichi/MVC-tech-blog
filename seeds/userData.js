const { User } = require('../models');

const userData = [
  {
    "username": "webdev1",
    "password": "password123",
    "email": "webdev1@gmail.com"
  },
  {
    "username": "developer4",
    "password": "password123",
    "email": "developer4@gmail.com"
  },
  {
    "username": "frontendDev",
    "password": "password123",
    "email": "frontendDev@gmail.com"
  },
  {
    "username": "fullstackeng",
    "password": "password123",
    "email": "fullstackeng@gmail.com"
  },
  {
    "username": "studentdev",
    "password": "password123",
    "email": "studentdev@gmail.com"
  },
  {
    "username": "teacherwebdev",
    "password": "password123",
    "email": "teacherwebdev@gmail.com"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
