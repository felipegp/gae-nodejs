'use strict';

/**
 * VisitsRepository
 *
 * @description :: Server-side actions for db transactions
 */

// These environment variables are set automatically on Google App Engine
const Datastore = require('@google-cloud/datastore');
// Instantiate a datastore client
const datastore = Datastore();

module.exports = {
  insertVisit: function (visit) {
    return datastore.save({
      key: datastore.key('visit'),
      data: visit
    });
  },

  getLastVisits: function () {
    const query = datastore.createQuery('visit')
      .order('timestamp', { descending: true })
      .limit(10);

    return datastore.runQuery(query)
      .then((results) => {
        const entities = results[0];
        return entities.map((entity) => `Time: ${entity.timestamp}, AddrHash: ${entity.userIp}`);
      });
  }
};
