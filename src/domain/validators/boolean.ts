import AppError from "../errors/app-error";

export function validateBoolean(value: boolean): boolean {
  if (typeof value === "boolean") return value;
  throw new AppError("value is not boolean");
}
