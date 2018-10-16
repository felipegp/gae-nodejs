var express = require('express');
var router = express.Router();
var visitsController = require('../../api/controllers/VisitsController');

router.get('/visits', visitsController.insertAndGetVisits);

module.exports = router;