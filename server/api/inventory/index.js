'use strict';

var express = require('express');
var controller = require('./inventory.controller');

var router = express.Router();

//router.get('/', controller.index);
router.get('/:id', controller.get);
router.post('/', controller.create);
//router.put('/:id', controller.upsert);
//router.patch('/:id', controller.patch);
router.delete('/:id', controller.remove);

module.exports = router;
