const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./mongodb/connect");
const authRoute = require("./route/authRoute");
const cors = require("cors");
const postRoute = require("./route/postRoute");
const cookieParser = require("cookie-parser");

dotenv.config();

const mongodb_uri = process.env.MONGO_URI;
const port = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

// connect to mongoDB

app.get("/test", (req, res) => {
  res.status(200).json("Test endpoint working");
});

app.use("/", authRoute);
app.use("/", postRoute);

connectDB(mongodb_uri);
app.listen(port, () => {
  console.log(`App is listening at port http://localhost:${port}`);
});
