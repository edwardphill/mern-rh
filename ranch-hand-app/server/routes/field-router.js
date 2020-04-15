const express = require('express');

const FieldCtrl = require('../controllers/field-ctrl');

const router = express.Router();

router.post('/fields', FieldCtrl.createField);
router.put('/fields/:id', FieldCtrl.updateField);
router.delete('/fields/:id', FieldCtrl.deleteField);
router.get('/fields/:id', FieldCtrl.getFieldById);
router.get('/fields', FieldCtrl.getFields);

module.exports = router;
