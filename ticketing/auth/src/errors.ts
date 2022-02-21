class RequestValidationError {
  reasons: string[];

  constructor() {
    this.reasons = [];
  }
};


class DatabaseConnectionError {
  reason = 'failed to connect to database';
};
