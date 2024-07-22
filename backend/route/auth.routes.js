import express from'express'
import passport from 'passport';
import { signup,login,logout,updatePassword } from '../controlller/auth.controller.js'
import { protectRoutes } from '../midleware/protectRoutes.js';
const router=express.Router()
router.post("/signup",signup)
router.post("/login",login)
router.patch('/update-password/:userId',protectRoutes, updatePassword);
router.post("/logout",logout)

export default router
