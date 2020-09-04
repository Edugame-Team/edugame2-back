const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const onePractise = await model.Practise.findByPk(req.params.id);
  if (onePractise !== null) {
    res.status(200).send({
      success: true,
      data: [onePractise],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const practises = await model.Practise.findAll();
  if (practises !== null) {
    res.status(200).send({
      success: true,
      data: [practises],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.Practise.update(
    req.body.data,
    { where: { practise_id: req.body.data.practise_id } },
  )
    .then(async () => {
      const practiseUpdated = await model.Practise.findByPk(req.body.data.practise_id);
      res.status(200).send({
        success: true,
        data: [practiseUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.Practise.destroy({
    where: { practise_id: req.params.id },
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
