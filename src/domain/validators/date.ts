import AppError from "../errors/app-error";

export function validateDate(date: Date): Date {
  if (date instanceof Date) return date;
  throw new AppError("date is not a valid format", 400);
}
