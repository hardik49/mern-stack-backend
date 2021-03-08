require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import routes from "./routes/route";
import auth from "./middlewares/apiAuthentication";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const mongoURI =
  "mongodb+srv://hardik:hdkHardik97@mern.fxcye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // eslint-disable-next-line
    console.log('Database Connection Established...!')
  })
  .catch(() => {
    // eslint-disable-next-line
    console.log('Error: Database connection can not be established...!')
  });
app.use(
  "/",
  (req, res, next) => {
    const notToAuthenticate = ["/login", "/signup", "/employee"];
    if (notToAuthenticate.indexOf(req.path) !== -1) return next();
    auth(req, res, next);
  },
  routes
);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server successfully started at https://localhost:${port}/`);
});
