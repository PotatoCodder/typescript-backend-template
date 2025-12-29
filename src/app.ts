import express, { Request, Response } from 'express';
import authRoutes from "./auth/auth.routes";

const app = express();

//middleware
app.use(express.json());

//test route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is running..."});
});

app.get("/health", (req: Request, res: Response) => {
  res.json({message: "hello", status: "ok"})
})

app.use("/api/auth", authRoutes);

export default app;