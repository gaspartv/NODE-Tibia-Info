import AppError from "./app-error";

class IdInvalidError extends AppError {
  constructor() {
    super("id not a valid uuid", 400);
  }
}

export default IdInvalidError;
