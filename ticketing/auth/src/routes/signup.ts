import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/api/users/signup', [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({ min: 4, max: 32 }).withMessage('Password must be between 4 and 32 characters'),
  ], (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Invalid:", errors.array());
      res.status(400).send(errors.array());
      return;
    }

    const { email, password } = req.body;
    console.log('Creating a user for:', email);

    res.send({});
});

export { router as signupRouter };
