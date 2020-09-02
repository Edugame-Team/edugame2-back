const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/getToken', (req, res) => {
  const { pseudo } = req.body;
  const { password } = req.body;
  console.log(req.body);
  if (pseudo === 'pseudo' && password === 'password') {
    const token = jwt.sign({
      pseudo: req.body.pseudo,
    }, 'my-secret-key', { expiresIn: 5000 });
    res.json({ success: true, message: 'logged in', token });
  } else {
    res.json({ success: false, message: 'not logged' });
  }
});

module.exports = router;
