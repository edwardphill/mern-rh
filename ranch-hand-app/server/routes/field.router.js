const express = require("express");

const FieldCtrl = require("../controllers/field-ctrl");

const router = express.Router();

router.post("/field", FieldCtrl.createField);
router.put("/field/:id", FieldCtrl.updateField);
router.delete("/field/:id", FieldCtrl.deleteField);
router.get("/field/:id", FieldCtrl.getFieldById);
router.get("/field", FieldCtrl.getField);

module.exports = router;
