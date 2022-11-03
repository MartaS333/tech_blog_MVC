const { User } = require("../models");

const userData = [
  {
    username: "martaschwarz",
    password: "test1",
  },
  {
    username: "haruthecat",
    password: "test2",
  },
  {
    username: "twinklebunbun",
    password: "test3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
