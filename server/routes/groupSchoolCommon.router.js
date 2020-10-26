const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneGroupSchool = await model.GroupSchool.findByPk(req.params.id);
  if (oneGroupSchool !== null) {
    res.status(200).send({
      success: true,
      data: [oneGroupSchool],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const groupSchools = await model.GroupSchool.findAll();
  if (groupSchools !== null) {
    res.status(200).send({
      success: true,
      data: [groupSchools],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.GroupSchool.update(
    req.body.data,
    { where: { groupSchool_id: req.body.data.groupSchool_id } },
  )
    .then(async () => {
      const groupSchoolUpdated = await model.GroupSchool.findByPk(req.body.data.groupSchool_id);
      res.status(200).send({
        success: true,
        data: [groupSchoolUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.GroupSchool.destroy({
    where: { groupSchool_id: req.params.id },
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
