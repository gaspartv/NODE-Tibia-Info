import AppError from "../errors/app-error";

export function validateName(name: string): string {
  const regex = /^[a-zA-Z]+$/;
  if (name.length >= 2 && name.length <= 30 && regex.test(name))
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  throw new AppError("name must be a string", 400);
}
