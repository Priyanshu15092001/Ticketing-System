const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectToDb = require("./config/db");
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

//connect to db and start server
connectToDb();
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
