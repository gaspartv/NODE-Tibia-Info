import AppError from "../errors/app-error";

export function validateNullDate(date: Date | null): Date | null {
  if (date instanceof Date || date === null) return date;
  throw new AppError("null or date is not a valid format", 400);
}
