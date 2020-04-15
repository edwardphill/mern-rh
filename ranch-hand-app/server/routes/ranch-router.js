const express = require('express');

const RanchCtrl = require('../controllers/ranch-ctrl');

const router = express.Router();

router.route('/ranches').get(RanchCtrl.getRanches).post(RanchCtrl.createRanch);

router
  .route('/ranches/:id')
  .get(RanchCtrl.getRanchById)
  .put(RanchCtrl.updateRanch)
  .delete(RanchCtrl.deleteRanch);

router.route('/ranches/:id/fields').post(RanchCtrl.addField);
router.route('/ranches/:id/fields/:fieldId').put(RanchCtrl.updateField);

router.route('/ranches/:id/herds').post(RanchCtrl.addHerd);

module.exports = router;
