import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({ message: 'This is a IoC container test.' });
});

export default router;
