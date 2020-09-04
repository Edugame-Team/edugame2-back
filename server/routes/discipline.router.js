const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneDiscipline = await model.Discipline.findByPk(req.params.id);
  if (oneDiscipline !== null) {
    res.status(200).send({
      success: true,
      data: [oneDiscipline],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const disciplines = await model.Discipline.findAll();
  if (disciplines !== null) {
    res.status(200).send({
      success: true,
      data: [disciplines],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.Discipline.update(
    req.body.data,
    { where: { discipline_id: req.body.data.discipline_id } },
  )
    .then(async () => {
      const disciplineUpdated = await model.Discipline.findByPk(req.body.data.discipline_id);
      res.status(200).send({
        success: true,
        data: [disciplineUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.Discipline.destroy({
    where: { discipline_id: req.params.id },
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
