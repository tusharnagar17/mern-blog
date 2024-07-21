const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./mongodb/connect");
const authRoute = require("./route/authRoute");
const cors = require("cors");
dotenv.config();

const mongodb_uri = process.env.MONGO_URI;
const port = process.env.PORT;
const CLIENT_URI = process.env.CLIENT_URI;

app.use(cors());
app.use(bodyParser.json());

// connect to mongoDB

app.get("/test", (req, res) => {
  res.status(200).json("Test endpoint working");
});

app.use("/", authRoute);

connectDB(mongodb_uri);
app.listen(port, () => {
  console.log(`App is listening at port http://localhost:${port}`);
});
