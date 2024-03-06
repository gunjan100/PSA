const mongoose = require("mongoose");
const bcyrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET_KEY;

const userSchema = new mongoose.Schema({
  uname: {
    type: String,
    required: true,
  },

  uemail: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// secure the password with bcyrpt method

userSchema.pre("save", async function () {
  const user = this;
  // this will get all data of User

  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltround = await bcyrpt.genSalt(10);
    const encryptedPassword = await bcyrpt.hash(user.password, saltround);
    user.password = encryptedPassword;
  } catch (error) {
    console.log(error);
  }
});

// generating JWT Token

userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.uemail,
        name: this.uname,
        isAdmin: this.isAdmin,
      },
      secretKey,
      { expiresIn: "1d" }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = new mongoose.model("user", userSchema);
