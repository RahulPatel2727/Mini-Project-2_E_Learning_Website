import express from 'express';
import {registerController,loginController,testController,emailController,resetController ,otpController, getOrdersController,getAllOrdersController} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/register', registerController);

router.post('/login', loginController);

router.post('/sendEmail',emailController);

router.post('/otpVerify',otpController);


router.post('/reset',resetController);
//test
router.get('/test',requireSignIn,isAdmin,testController)


router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

router.get("/admin-auth", requireSignIn, isAdmin,(req, res) => {
    res.status(200).send({ ok: true });
});

router.get("/orders",requireSignIn,getOrdersController)

router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
export default router;