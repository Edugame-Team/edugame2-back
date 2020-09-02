const jwt = require('jsonwebtoken');

function checkAuthorization(req, res, next) {
  let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;

  if (token) {
    token = token.replace('Bearer ', '');
    jwt.verify(token, 'my-secret-key', (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate with token' });
      }
      req.decoded = decoded;
      return next();
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided',
    });
  }
  return res.status(404).send({
    success: false,
    message: 'Error in the middleware',
  });
}

module.exports = { checkAuthorization };
