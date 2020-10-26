const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneRoom = await model.Room.findByPk(req.params.id);
  if (oneRoom !== null) {
    res.status(200).send({
      success: true,
      data: [oneRoom],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const rooms = await model.Room.findAll();
  if (rooms !== null) {
    res.status(200).send({
      success: true,
      data: [rooms],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.Room.update(
    req.body.data,
    { where: { room_id: req.body.data.room_id } },
  )
    .then(async () => {
      const roomUpdated = await model.Room.findByPk(req.body.data.room_id);
      res.status(200).send({
        success: true,
        data: [roomUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.Room.destroy({
    where: { room_id: req.params.id },
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
