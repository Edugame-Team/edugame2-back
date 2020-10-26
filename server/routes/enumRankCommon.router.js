const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneEnumRank = await model.EnumRank.findByPk(req.params.id);
  if (oneEnumRank !== null) {
    res.status(200).send({
      success: true,
      data: [oneEnumRank],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const enumRanks = await model.EnumRank.findAll();
  if (enumRanks !== null) {
    res.status(200).send({
      success: true,
      data: [enumRanks],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.EnumRank.update(
    req.body.data,
    { where: { enumRank_id: req.body.data.enumRank_id } },
  )
    .then(async () => {
      const enumRankUpdated = await model.EnumRank.findByPk(req.body.data.enumRank_id);
      res.status(200).send({
        success: true,
        data: [enumRankUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.EnumRank.destroy({
    where: { enumRank_id: req.params.id },
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
