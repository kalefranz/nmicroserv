import { Request, Response, NextFunction } from "express";
// import { RequestValidationError  } from '../errors/request-validation-error';
// import { DatabaseConnectionError } from '../errors/database-connection-error';
import { CustomError } from "../errors/custom-error";


export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

  if (err instanceof CustomError) {
    console.error('CustomError:', err);
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error('OtherError:', err);
  res.status(420).send({
    errors: [{ message: 'Something went wrong' }]
  });

  // // if (err instanceof RequestValidationError) {

  // //   console.log('handling this error as a request validation error');
  // //   const formattedErrors = err.errors.map(error => {
  // //     return { message: error.msg, field: error.param };
  // //   });
  // //   return res.status(400).send({ errors: formattedErrors });
  // // };

  // // if (err instanceof DatabaseConnectionError) {
  // //   console.log('handling this error as a db connection error');

  // //   return res.status(500).send({ errors: [
  // //     { message: err.reason },
  // //   ]});
  // // };
  
  // console.log(err);

  // res.status(500).send({
  //   errors: [{ message: 'something with wrong' }],
  // });
};
