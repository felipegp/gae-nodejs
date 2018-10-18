// ExampleService.js - in api/services

const utilsService = require('./UtilsService');
const version = '2018-02-16';

module.exports = {
  getDataRequest: function (data, callback) {
    let options = {
      method: 'POST',
      hostname: 'test.com',
      path: `/api/foo?version=${version}`,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    utilsService.nativeRequest(options, callback, { foo: data });
  },

  addTwoNumbers: function (x, y) {
    return x + y;
  }

};
