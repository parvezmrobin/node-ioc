import { Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({name: 'Parvez M Robin'});
});

export default router;
