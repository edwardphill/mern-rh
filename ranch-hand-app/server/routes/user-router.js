const express = require('express');

const UserCtrl = require('../controllers/user-ctrl');

const router = express.Router();

router.post('/users', UserCtrl.createUser);
router.put('/users/:id', UserCtrl.updateUser);
router.delete('/users/:id', UserCtrl.deleteUser);
router.get('/users/:id', UserCtrl.getUserById);
router.get('/users', UserCtrl.getUsers);

module.exports = router;
