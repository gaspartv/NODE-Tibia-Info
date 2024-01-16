import AppError from "../errors/app-error";

export function validateEmail(email: string): string {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) return email;
  throw new AppError("invalid email");
}
