const express = require("express");
const connect = require("./configs/db");

const cors = require("cors");

const userController = require('./controllers/users.controllers')

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users',userController);

app.listen(2468, async () => {
  try {
    await connect();
    console.log(`listening on port 2468`);
  } catch (error) {
    console.log(error.message);
  }
});