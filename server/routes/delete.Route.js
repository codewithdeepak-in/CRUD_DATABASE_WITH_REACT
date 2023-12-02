const express = require('express');
const router = express.Router();

const {deleteController} = require('../controller/delete.Controller');

router.get('/:id', deleteController.delete);


module.exports = router;