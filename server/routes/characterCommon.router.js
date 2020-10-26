const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneCharacter = await model.Character.findByPk(req.params.id);
  if (oneCharacter !== null) {
    res.status(200).send({
      success: true,
      data: [oneCharacter],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const characters = await model.Character.findAll();
  if (characters !== null) {
    res.status(200).send({
      success: true,
      data: [characters],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.Character.update(
    req.body.data,
    { where: { character_id: req.body.data.character_id } },
  )
    .then(async () => {
      const CharacterUpdated = await model.Character.findByPk(req.body.data.character_id);
      res.status(200).send({
        success: true,
        data: [CharacterUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.Character.destroy({
    where: { character_id: req.params.id },
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
