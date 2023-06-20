const express = require("express");
const router = express.Router();
const User = require("../controller/index");

router.post("/signup", User.signup);
router.post("/signin", User.signin);

module.exports = router;
