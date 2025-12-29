import { Router } from "express"
import { signUpController, loginController } from "./auth.controller"
import { validate } from "../middlewares/validate";
import { registerUserSchema, loginUserSchema } from "../schemas/user.schema";

const router = Router();

//POST api/auth/signUp  
router.post("/signup", validate(registerUserSchema), signUpController);

//POST api/auth/login
router.post("/login", validate(loginUserSchema), loginController);

export default router;