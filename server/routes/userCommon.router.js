var express = require('express');
var router = express.Router();

router.get('/one', function(req, res, next) {
    res.send('hello with token');
});

module.exports = router;