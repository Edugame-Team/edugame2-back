var jwt = require('jsonwebtoken');

function checkAuthorization(req, res, next) {
    let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];

    if (token) {
        token = token.replace('Bearer ', '');
        jwt.verify(token, 'my-secret-key', function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate with token' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided',
        });
    }
};

module.exports = { checkAuthorization };
