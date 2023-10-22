const mongoose = require("mongoose");

exports.connectToDB = () =>
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB is connected"))
    .catch((err) => console.error(err));
