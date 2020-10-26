const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneItem = await model.Item.findByPk(req.params.id);
  if (oneItem !== null) {
    res.status(200).send({
      success: true,
      data: [oneItem],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const items = await model.Item.findAll();
  if (items !== null) {
    res.status(200).send({
      success: true,
      data: [items],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.Item.update(
    req.body.data,
    { where: { item_id: req.body.data.item_id } },
  )
    .then(async () => {
      const itemUpdated = await model.Item.findByPk(req.body.data.item_id);
      res.status(200).send({
        success: true,
        data: [itemUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.Item.destroy({
    where: { item_id: req.params.id },
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
