const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/:id', asyncMiddleware(async (req, res) => {
  const oneCareer = await model.Career.findByPk(req.params.id);
  res.send(oneCareer);
}));

module.exports = router;
