import { Request, Response } from "express";
import { signUp, login } from "./auth.service";
import { signToken } from "./jwt";


//sign up controller
export async function signUpController(req: Request, res: Response ) {
  try {
    console.log("BODY", req.body);
    const { email, password, name } = req.body;

    const user = await signUp({ email, password, name });      

    const token = signToken({ userId: user.id, email: user.email });

    res.status(201).json({ token, user: { id: user.id, email: user.email, name: user.name } });

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}


//login controller
export async function loginController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await login({ email, password });

    const token = signToken({ userId: user.id, email: user.email });

    res.status(200).json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
