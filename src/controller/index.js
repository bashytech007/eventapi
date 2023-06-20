const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { email, firstname, lastname, password, confirmpassword } = req.body;
    const user = await User.findOne({ email });
    if (user)
      return res.status(400).send({
        message: "User already exist",
      });

    if (password !== confirmpassword)
      return res.status(400).send({
        message: "Passwords do not match",
      });

    // const hashpassword = await bcrypt.hash(password, 12)

    const newUser = new User({
      email: email,
      firstname: firstname,
      lastname: lastname,
      password,
    });

    await newUser.save();

    delete newUser._doc.password;

    res.status(200).send({
      data: newUser,
    });
  } catch (err) {
    console.log(`${err.message}`);
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).send({
        message: "user does not exist",
      });
    // const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (user.password !== password)
      return res.status(400).send({
        message: "password is incorrect",
      });
    const token = jwt.sign({ _id: user._id }, process.env.JWTSECRET, {
      expiresIn: "1d",
    });
    delete user.password;
    res.status(200).send({
      email: user.email,
      lastname: user.lastname,
      firstname: user.firstname,
      id: user._id,
      token: token,
    });
  } catch (err) {
    console.log(`${err.message}`);
  }
};

