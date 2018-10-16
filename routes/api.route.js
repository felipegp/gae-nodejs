var express = require('express');
var router = express.Router();
var exampleApi = require('./api/example.route');
var loginApi = require('./api/login.route');
var visitsApi = require('./api/visits.route');

router.use('/example', exampleApi);
router.use('/login', loginApi);
router.use('/datastore', visitsApi);

module.exports = router;