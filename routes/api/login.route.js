var express = require('express');
var router = express.Router();
var loginController = require('../../api/controllers/LoginController');

router.get('/', loginController.login);

module.exports = router;
