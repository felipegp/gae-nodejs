var express = require('express');
var router = express.Router();
var exampleController = require('../../api/controllers/ExampleController');
const jwtUtil = require('../../api/util/JWTUtil');

router.post('/people', jwtUtil.formatToken, exampleController.getPersonList);

module.exports = router; 