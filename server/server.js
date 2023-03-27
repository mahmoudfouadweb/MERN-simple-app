const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const _port = process.env.PORT,
  user = process.env.USERNAME,
  pass = process.env.PASSWORD,
  database = process.env.DB;

const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${user}:${pass}@cluster0.pnzjavs.mongodb.net/${database}?retryWrites=true&w=majority`
);

// Connect users model
const UserModel = require("./models/Users");

// Get request
app.get("/users", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

// create user
app.post("/createUser", async (req, res) => {
  const newUser = new UserModel(req.body);
  await newUser.save();

  res.json(req.body);
});

app.listen(_port, () => {
  console.log("server is running perfictly");
});
