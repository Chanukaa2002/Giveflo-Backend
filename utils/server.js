import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import AuthRouter from "../routes/auth.routers.js";
//server configerations
dotenv.config();
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());

// routes
server.use("/api/v1/auth", AuthRouter);
export default server;
