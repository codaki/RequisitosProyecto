import express  from "express";
import { login, loginGoogle, logout, register } from "../controllers/auth.js";


const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.post("/loginGoogle",loginGoogle)
router.post("/logout",logout)



export default router