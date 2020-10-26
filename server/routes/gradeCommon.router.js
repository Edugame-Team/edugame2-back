const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneGrade = await model.Grade.findByPk(req.params.id);
  if (oneGrade !== null) {
    res.status(200).send({
      success: true,
      data: [oneGrade],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const grades = await model.Grade.findAll();
  if (grades !== null) {
    res.status(200).send({
      success: true,
      data: [grades],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.Grade.update(
    req.body.data,
    { where: { grade_id: req.body.data.grade_id } },
  )
    .then(async () => {
      const gradeUpdated = await model.Grade.findByPk(req.body.data.grade_id);
      res.status(200).send({
        success: true,
        data: [gradeUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.Grade.destroy({
    where: { grade_id: req.params.id },
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
