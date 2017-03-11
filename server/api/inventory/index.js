'use strict';

var express = require('express');
var controller = require('./inventory.controller');

var router = express.Router();

//router.get('/', controller.index);
router.get('/:id', controller.get);
router.get('/', controller.find);
router.post('/', controller.create);
router.post('/search', controller.find);
//router.put('/:id', controller.upsert);
//router.patch('/:id', controller.patch);
router.delete('/:id', controller.remove);

module.exports = router;
