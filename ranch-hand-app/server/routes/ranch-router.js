const express = require("express");

const RanchCtrl = require("../controllers/ranch-ctrl");

const router = express.Router();

router.post("/ranch", RanchCtrl.createRanch);
router.put("/ranch/:id", RanchCtrl.updateRanch);
router.delete("/ranch/:id", RanchCtrl.deleteRanch);
router.get("/ranch/:id", RanchCtrl.getRanchById);
router.get("/ranch", RanchCtrl.getRanches);

module.exports = router;