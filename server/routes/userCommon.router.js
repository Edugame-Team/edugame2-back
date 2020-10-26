const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneUser = await model.User.findByPk(req.params.id);
  if (oneUser !== null) {
    res.status(200).send({
      success: true,
      data: [oneUser],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const users = await model.User.findAll();
  console.log(users);
  if (users !== null) {
    res.status(200).send({
      success: true,
      data: [users],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.User.update(
    req.body.data,
    { where: { user_id: req.body.data.user_id } },
  )
    .then(async () => {
      const userUpdated = await model.User.findByPk(req.body.data.user_id);
      res.status(200).send({
        success: true,
        data: [userUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.User.destroy({
    where: { user_id: req.params.id },
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
