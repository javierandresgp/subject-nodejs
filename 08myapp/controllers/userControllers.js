"use strict";
const User = require("../models/User");
// get all users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    next();
  }
};
//
exports.getUser = async (req, res, next) => {
  try {
    res.json({ message: "working in getUser ..." });
  } catch (error) {
    console.warn(error);
    next();
  }
};
//
exports.postUser = async (req, res, next) => {
  try {
    res.json({ message: "working in postUser ..." });
  } catch (error) {
    console.warn(error);
    next();
  }
};
//
exports.putUser = async (req, res, next) => {
  try {
    res.json({ message: "working in putUser ..." });
  } catch (error) {
    console.warn(error);
    next();
  }
};
//
exports.deleteUser = async (req, res, next) => {
  try {
    res.json({ message: "working in deleteUser ..." });
  } catch (error) {
    console.warn(error);
    next();
  }
};
