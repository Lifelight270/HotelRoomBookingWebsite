const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const path = require ('path');

// const __dirname = path.resolve();

app.use(express.static(path.join(__dirname,"../dist")));

app.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"../dist","index.html"))
})


app.get("/",(req,res)=>{
  res.send("api is running successfully")
})



const SECRET_KEY = "rT9$wL2*pZvQ5!sY8@cX1#nG4&mU7";
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.set("view engine", "ejs");



// .connect("mongodb://127.0.0.1:27017/roomBookingSystem", {
mongoose
  .connect("mongodb+srv://lightlife908:lightlife908@cluster0.3dnyipx.mongodb.net/roomBookingSystem", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection with mongodb is succussful");
  })
  .catch((e) => {
    console.log(`${e}`);
  });
// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  city: String,
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: Date,
});

const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("usersData", userSchema);
const SignupUser = mongoose.model("signupData", signupSchema);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lightlife908@gmail.com",
    pass: "xtvp hqma llxx jpwg",
  },
});

app.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const forgetUser = await SignupUser.findOne({ email: email });

    if (!forgetUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = jwt.sign({ userId: forgetUser._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    const mailOptions = {
      from: "lightlife908@gmail.com",
      to: forgetUser.email,
      subject: "Password Reset",
      text: `Click the following link to reset your password: http://localhost:5000/reset-password/${forgetUser._id}/${resetToken}`,
      // http://localhost:5000/reset-password/${userId}/${token}
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error.message);
        return res.status(500).json({ message: "Error sending reset email" });
      }
      console.log("Email sent:", info.response);
      return res.status(200).json({ message: "Reset token sent successfully" });
    });
  } catch (error) {
    console.error("Error during forgot password:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/reset-password/:id/:token", async (req, res) => {
  try {
    const { id, token } = req.params;
    const decodedToken = jwt.verify(token, SECRET_KEY);

    const resetUser = await SignupUser.findById(decodedToken.userId);

    if (!resetUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.render("index", { email: decodedToken.email });
    //  return res.status(200).json({ message: "Password reset successfully",id });
  } catch (error) {
    console.error("Error during reset password:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body;

    // Verify the token and get the user ID
    const decodedToken = jwt.verify(token, SECRET_KEY);

    // Check if the user exists and matches the token
    const resetUser = await SignupUser.findById(decodedToken.userId);

    if (!resetUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's password
    // const encryptedPassword = await bcrypt.hash(password, 10);
    await SignupUser.updateOne(
      { _id: resetUser._id },
      { $set: { password: password } }
    );

    // You can send a response or render a success page
    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error during password reset:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("server is running in 5000");
});

app.post("/api/users", async (req, res) => {
  try {
    const { name, email, address, city, startDate, endDate } = req.body;
    const newUser = new User({
      name,
      email,
      address,
      city,
      startDate,
      endDate,
    });
    await newUser.save();
    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/api/signusers", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSignup = new SignupUser({
      username,
      email,
      password: hashedPassword,
    });
    await newSignup.save();
    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const getUser = await SignupUser.findOne({ email: email });

    const isPasswordValid = await bcrypt.compare(password, getUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // res.status(200).json({ token, userId: getUser._id });
    return res.status(201).json({ message: "User login successfully" });
    // console.error("submitted successfuly");
  } catch (error) {
    console.error("Error during login:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
