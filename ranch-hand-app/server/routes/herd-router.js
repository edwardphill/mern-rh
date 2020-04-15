const express = require('express');

const HerdCtrl = require('../controllers/herd-ctrl');

const router = express.Router();

router.post('/herds', HerdCtrl.createHerd);
router.put('/herds/:id', HerdCtrl.updateHerd);
router.delete('/herds/:id', HerdCtrl.deleteHerd);
router.get('/herds/:id', HerdCtrl.getHerdById);
router.get('/herds', HerdCtrl.getHerds);

module.exports = router;
