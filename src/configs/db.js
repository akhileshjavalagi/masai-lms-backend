const mongoose = require("mongoose");
const URL = process.env.MONGODBURL;
module.exports = () => {
  return mongoose.connect('mongodb+srv://akhilesh:12345@cluster0.dfgxsda.mongodb.net/?retryWrites=true&w=majority');
};
