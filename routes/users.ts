import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({name: 'Parvez M Robin'});
});

export default router;
