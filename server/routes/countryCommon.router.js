const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneCountry = await model.Country.findByPk(req.params.id);
  if (oneCountry !== null) {
    res.status(200).send({
      success: true,
      data: [oneCountry],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const Countrys = await model.Country.findAll();
  if (Countrys !== null) {
    res.status(200).send({
      success: true,
      data: [Countrys],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.Country.update(
    req.body.data,
    { where: { country_id: req.body.data.country_id } },
  )
    .then(async () => {
      const countryUpdated = await model.Country.findByPk(req.body.data.country_id);
      res.status(200).send({
        success: true,
        data: [countryUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.Country.destroy({
    where: { country_id: req.params.id },
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
