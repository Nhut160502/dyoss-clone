import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import { privateRouters } from "./src/routers/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("./public"));

app.use("/api/auth/", privateRouters);

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server running on ${process.env.HOST}:${process.env.PORT}`);
});
