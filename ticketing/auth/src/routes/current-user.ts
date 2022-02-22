import express from 'express';
import { currentUser } from '../middlewares/current-user';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {  // currentUser, 
  res.send({
    currentUser: req.currentUser || null
    // currentUser: 15,  // req.currentUser || null
  });
});

export { router as currentUserRouter };
