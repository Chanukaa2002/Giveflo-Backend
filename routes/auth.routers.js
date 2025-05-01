import {Router} from "express";
import {OrgRegister,Login,PasswordReset,Me,UpdateMe, DonorRegister} from "../controller/auth.controller.js"

const router = Router();

router.post("/donor",DonorRegister)
router.post("/org",OrgRegister)
router.post("/login",Login);
router.post("/password-reset",PasswordReset);
router.get("/me",Me)
router.put("/me",UpdateMe)

export default router;