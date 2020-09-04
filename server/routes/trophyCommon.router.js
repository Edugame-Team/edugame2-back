const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneTrophy = await model.Trophy.findByPk(req.params.id);
  if (oneTrophy !== null) {
    res.status(200).send({
      success: true,
      data: [oneTrophy],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const trophys = await model.Trophy.findAll();
  if (trophys !== null) {
    res.status(200).send({
      success: true,
      data: [trophys],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.Trophy.update(
    req.body.data,
    { where: { trophy_id: req.body.data.trophy_id } },
  )
    .then(async () => {
      const trophyUpdated = await model.Trophy.findByPk(req.body.data.trophy_id);
      res.status(200).send({
        success: true,
        data: [trophyUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.Trophy.destroy({
    where: { trophy_id: req.params.id },
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
