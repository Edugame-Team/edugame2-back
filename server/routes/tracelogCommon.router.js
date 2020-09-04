const express = require('express');
const model = require('../utils/loadModels');
const asyncMiddleware = require('../utils/asyncMiddleware');

const router = express.Router();

router.get('/byId/:id', asyncMiddleware(async (req, res) => {
  const oneTraceLog = await model.TraceLog.findByPk(req.params.id);
  if (oneTraceLog !== null) {
    res.status(200).send({
      success: true,
      data: [oneTraceLog],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const traceLogs = await model.TraceLog.findAll();
  if (traceLogs !== null) {
    res.status(200).send({
      success: true,
      data: [traceLogs],
    });
  } else {
    res.status(200).send({
      success: false,
      message: 'No data found',
    });
  }
}));

router.put('/', asyncMiddleware(async (req, res) => {
  await model.TraceLog.update(
    req.body.data,
    { where: { traceLog_id: req.body.data.traceLog_id } },
  )
    .then(async () => {
      const traceLogUpdated = await model.TraceLog.findByPk(req.body.data.traceLog_id);
      res.status(200).send({
        success: true,
        data: [traceLogUpdated],
      });
    })
    .catch((err) => res.status(200).send({
      success: false,
      message: err,
    }));
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  await model.TraceLog.destroy({
    where: { traceLog_id: req.params.id },
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
