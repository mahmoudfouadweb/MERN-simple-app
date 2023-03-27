const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://mfapolice:IYwFPJANXJVWGoj5@cluster0.pnzjavs.mongodb.net/FirstMERNproject?retryWrites=true&w=majority')

// Connect users model
const UserModel = require('./models/Users')







app.get('/', async (req,res) => {
  const users = await UserModel.find()
  res.json(users)
})

app.listen('3001', () => {
  console.log('server is running perfictly');
})