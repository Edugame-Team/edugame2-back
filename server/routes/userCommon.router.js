const express = require('express');

const router = express.Router();

router.get('/one', (req, res) => {
  res.send('hello with token');
});

module.exports = router;
