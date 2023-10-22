const mongoose = require("mongoose");
const { Schema } = mongoose;

const msgSchema = new Schema({
  msg: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

exports.Message = mongoose.connection
  .useDb("MessageDB")
  .model("messageList", msgSchema);
