const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectToDb = require("./config/db");

const authRoutes = require('./routes/authRoutes')
const profileRoutes =require('./routes/profileRoutes')

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api/auth',authRoutes)
app.use('/api/profile',profileRoutes)


//connect to db and start server
connectToDb();
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
