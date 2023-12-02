const express = require('express');
const router = express.Router();
const { fetchController } = require('../controller/fetch.Controller');

router.get('/', fetchController.fetch);


module.exports = router;