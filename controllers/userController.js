const { User } = require("../models/User");
// const { generateToken } = require("../helpers/jwt");

exports.signUpUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      birthdate,
      gender,
      phonenumber,
      is_admin
    } = req.body;
    const user = await new User({
      firstName,
      lastName,
      email,
      password,
      birthdate,
      gender,
      phonenumber,
      is_admin
    }).save();

    res.status(201).json({
      message: "User created successfully!"
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
    console.log(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      if (await user.isValidPassword(password, user.password)) {
        res.status(200).json({
          user
        });
      } else {
        res.status(401).json({
          message: "Invalid password"
        });
      }
    } else {
      res.status(404).json({
        message: "User not found"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
    console.log(error);
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (user) {
      res.status(200).json({
        message: "User updated successfully"
      });
    } else {
      res.status(404).json({
        message: "User Not Found"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
    console.log(error);
  }
};
