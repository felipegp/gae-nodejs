'use strict';

/**
 * LoginController
 *
 * @description :: Server-side actions for login.
 */

const jwt = require('jsonwebtoken');

module.exports = {
  login: function (req, res) {
    // MOCK USER
    const user = {
      id: 1,
      name: 'Joe',
      email: 'joe@gmail.com'
    };

    jwt.sign({ user }, 'secretkey', { expiresIn: '90s' }, (err, token) => {
      console.log('error: ', err);

      res.json({
        token
      });
    });
  }
};
