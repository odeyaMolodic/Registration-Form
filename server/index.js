const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://odeya:<password>@ac-9eiitzm-shard-00-00.s2xokks.mongodb.net:27017,ac-9eiitzm-shard-00-01.s2xokks.mongodb.net:27017,ac-9eiitzm-shard-00-02.s2xokks.mongodb.net:27017/?ssl=true&replicaSet=atlas-agx8xh-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("registration_form").collection("users");
  // perform actions on the collection object
  client.close();
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});


const User = mongoose.model("USER", userSchema);
exports = User;