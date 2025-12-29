import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma"
import { RegisterUserInput, LoginUserInput } from "../schemas/user.schema";

export async function signUp(data: RegisterUserInput) {

  const { email, password, name } = data;

  const existing = await prisma.user.findUnique({ where: { email: data.email } }); 
  
  if (existing) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    }
  });
}

export async function login(data: LoginUserInput) {
  const { email, password } = data;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("User not found");
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }
  return user;
}