const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneProfile = await model.Profile.findByPk(req.params.id);
  if (oneProfile !== null) {
    res.status(200).send({
      success: true,
      data: [oneProfile],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const profiles = await model.Profile.findAll();
  if (profiles !== null) {
    res.status(200).send({
      success: true,
      data: [profiles],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.Profile.update(
    req.body.data,
    { where: { profile_id: req.body.data.profile_id } },
  )
    .then(async () => {
      const profileUpdated = await model.Profile.findByPk(req.body.data.profile_id);
      res.status(200).send({
        success: true,
        data: [profileUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.Profile.destroy({
    where: { profile_id: req.params.id },
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
