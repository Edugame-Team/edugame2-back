const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneCareer = await model.Career.findByPk(req.params.id);
  if (oneCareer !== null) {
    res.status(200).send({
      success: true,
      data: [oneCareer],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const careers = await model.Career.findAll();
  if (careers !== null) {
    res.status(200).send({
      success: true,
      data: [careers],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.Career.update(
    req.body.data,
    { where: { career_id: req.body.data.career_id } },
  )
    .then(async () => {
      const careerUpdated = await model.Career.findByPk(req.body.data.career_id);
      res.status(200).send({
        success: true,
        data: [careerUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.Career.destroy({
    where: { career_id: req.params.id },
  })
    .then(async (result) => res.status(200).send({
      success: true,
      data: result,
    }))
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

module.exports = router;
