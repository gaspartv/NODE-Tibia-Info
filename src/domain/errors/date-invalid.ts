import AppError from "./app-error";

class DateInvalidError extends AppError {
  constructor() {
    super("date is not a valid format", 400);
  }
}

export default DateInvalidError;
