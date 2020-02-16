// const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  birthdate: { type: Date, required: true },
  phonenumber: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: false },
  is_admin: { type: Boolean, required: true }

  // taskList: [{ type: mongoose.Schema.ObjectId, ref: "task" }],
  // projectList: [{ type: mongoose.Schema.ObjectId, ref: "project" }]
});

userSchema.pre("save", async function(next) {
  try {
    const hash = await bcrypt.hash(this.password, 16.5);
    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async (password, compareHash) => {
  try {
    return await bcrypt.compare(password, compareHash);
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model("user", userSchema);

module.exports = { User };
