import AppError from "../errors/app-error";

export function validateUUID(id: string): string {
  const regex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (regex.test(id)) return id;
  throw new AppError("id not a valid uuid", 400);
}
