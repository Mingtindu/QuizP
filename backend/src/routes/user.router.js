import  { Router } from 'express'
import { addUser,checkUser } from '../controllers/user.controller.js'

const router = Router()

router.route("/register").post(addUser)
router.route("/login").post(checkUser);

export default router