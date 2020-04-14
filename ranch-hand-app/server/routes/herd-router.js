const express = require("express");

const HerdCtrl = require("../controllers/herd-ctrl");

const router = express.Router();

router.post("/herd", HerdCtrl.createHerd);
router.put("/herd/:id", HerdCtrl.updateHerd);
router.delete("/herd/:id", HerdCtrl.deleteHerd);
router.get("/herd/:id", HerdCtrl.getHerdById);
router.get("/herd", HerdCtrl.getHerd);

module.exports = router;