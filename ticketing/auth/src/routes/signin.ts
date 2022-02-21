import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  res.send('A Ok');
});

export { router as signinRouter };
