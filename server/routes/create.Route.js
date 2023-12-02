const express = require('express');
const router = express.Router();
const {createController} = require('../controller/create.Controller');

router.post('/', createController.create);


module.exports = router;