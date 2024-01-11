import express from "express";
import { categoryControllers } from "../controllers/index.js";

const privateRouters = express.Router();

privateRouters.use("/category", categoryControllers.index);

export default privateRouters;
