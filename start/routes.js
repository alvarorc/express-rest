const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
  res.status(200).send('Ok');
});

module.exports = router;
