import AppError from "../errors/app-error";
import { passwordHash } from "../repositories/generators/password-hash";

export function validatePassword(password: string): string {
  const regex =
    /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z])(?!.*(.)\1{2,}).{8,50}$/;
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (regex.test(password) || uuidRegex.test(password))
    return passwordHash(password);
  throw new AppError(
    "the password must be between 8 and 50 characters long, contain at least one uppercase letter, one lowercase letter, one special character, and cannot have numeric or alphabetic sequences of three characters or more",
  );
}
