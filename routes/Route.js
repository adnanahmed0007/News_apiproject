 import { Register } from "../controllers/Register.js";
 import { LoginUser1 } from "../controllers/Register.js";
 import { Chat_Gpt } from "../controllers/Register.js";
import { Router } from "express";
const Route=Router();
Route.route("/register").post(Register);
Route.route("/login").post(LoginUser1)
Route.route("/chat").post(Chat_Gpt)

export  default Route;