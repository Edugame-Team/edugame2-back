const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneCourse = await model.Course.findByPk(req.params.id);
  if (oneCourse !== null) {
    res.status(200).send({
      success: true,
      data: [oneCourse],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const Courses = await model.Course.findAll();
  if (Courses !== null) {
    res.status(200).send({
      success: true,
      data: [Courses],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.Course.update(
    req.body.data,
    { where: { course_id: req.body.data.course_id } },
  )
    .then(async () => {
      const courseUpdated = await model.Course.findByPk(req.body.data.course_id);
      res.status(200).send({
        success: true,
        data: [courseUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.Course.destroy({
    where: { course_id: req.params.id },
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
