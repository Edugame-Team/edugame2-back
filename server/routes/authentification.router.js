var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.post('/getToken', function(req, res, next) {
    const pseudo = req.body.pseudo;
    const password = req.body.password;
    console.log(req.body);
    if (pseudo == 'pseudo' && password == 'password') {
        const token = jwt.sign({
            pseudo: req.body.pseudo
        }, 'my-secret-key', { expiresIn: 5000 });
        res.json({ success: true, message: 'logged in', token: token });
    } else {
        res.json({ success: false, message: 'not logged' });
    }
});

module.exports = router;