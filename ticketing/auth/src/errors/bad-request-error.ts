import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public message: string, field?: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);

    // this.field = field;
    // // const this.status = 400;
    // // this.message = message;
  };

  serializeErrors(): { message: string }[] {
    return [
      { message: this.message },
    ];
  };

}
