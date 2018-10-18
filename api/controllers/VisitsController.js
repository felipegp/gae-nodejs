'use strict';

/**
 * DatastoreController
 *
 * @description :: Server-side actions for handling incoming reqs.
 */

const visitsService = require('../services/VisitsService');

module.exports = {
  insertAndGetVisits: function (req, res, next) {
    visitsService.insertAndGetVisits(
      req,
      function (visits) {
        console.log(visits);
        res
          .status(200)
          .set('Content-Type', 'text/plain')
          .send(`Last 10 visits:\n${visits.join('\n')}`)
          .end();
      },
      next
    );
  }
};
