const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneSchool = await model.School.findByPk(req.params.id);
  if (oneSchool !== null) {
    res.status(200).send({
      success: true,
      data: [oneSchool],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const schools = await model.School.findAll();
  if (schools !== null) {
    res.status(200).send({
      success: true,
      data: [schools],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.School.update(
    req.body.data,
    { where: { school_id: req.body.data.school_id } },
  )
    .then(async () => {
      const schoolUpdated = await model.School.findByPk(req.body.data.school_id);
      res.status(200).send({
        success: true,
        data: [schoolUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.School.destroy({
    where: { school_id: req.params.id },
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
