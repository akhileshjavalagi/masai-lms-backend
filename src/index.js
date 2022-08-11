const express = require("express");
const connect = require("./configs/db");

const cors = require("cors");

const userController = require('./controllers/users.controllers')
const assignmentController = require("./controllers/assignments.controllers");
const lectureController = require("./controllers/lectures.controllers");
const adminConctroller = require("./controllers/admin.controllers");
const { register, login } = require('./controllers/auth.controllers');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/register',register)
app.use('/login',login)

app.use('/users',userController);
app.use('/assignment', assignmentController);
app.use('/lecture', lectureController);
app.use("/admin", adminConctroller);

app.listen(2468, async () => {
  try {
    await connect();
    console.log(`listening on port 2468`);
  } catch (error) {
    console.log(error.message);
  }
});