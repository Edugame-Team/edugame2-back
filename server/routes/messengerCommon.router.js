const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneMessenger = await model.Messenger.findByPk(req.params.id);
  if (oneMessenger !== null) {
    res.status(200).send({
      success: true,
      data: [oneMessenger],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const messengers = await model.Messenger.findAll();
  if (messengers !== null) {
    res.status(200).send({
      success: true,
      data: [messengers],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.Messenger.update(
    req.body.data,
    { where: { messenger_id: req.body.data.messenger_id } },
  )
    .then(async () => {
      const messengerUpdated = await model.Messenger.findByPk(req.body.data.messenger_id);
      res.status(200).send({
        success: true,
        data: [messengerUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.Messenger.destroy({
    where: { messenger_id: req.params.id },
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
