const jwt = require("jsonwebtoken");
const User = require("../models/User");

const middleWeare = async (req, resp, next) => {
  const token = req.header("Authorization");
  if (!token) {
    resp.send({ success: false, msg: "Unorthrized token is not valid" });
  }
  console.log(token);
  const jwtToken = token.replace("Bearer", "").trim();
  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({ uemail: isVerified.email }).select({
      password: 0,
    });

    req.user = userData;
    req.token = token;
    req.userId = userData._id;
  } catch (error) {
    console.log(error);
    resp.send({ msg: "unorthraized token" });
  }

  next();
};

module.exports = middleWeare;
