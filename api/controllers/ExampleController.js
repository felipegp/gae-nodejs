'use strict';

/**
 * ExampleController
 *
 * @description :: Server-side actions for handling incoming reqs.
 */

const exampleService = require('../services/ExampleService');
const jwt = require('jsonwebtoken');

const listExample = [
    { name: "Jane Doe", age: "27"},
    { name: "Sam Will", age: "53"},
    { name: "Bob White", age: "12"}
];

module.exports = {
    getPersonList: function (req, res) {
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err) {
                res.sendStatus(403);
            
            } else {
                if (req.body && req.body.age) {
                    const result = listExample.filter(person => person.age > req.body.age);
                    res.json(result);
                } else {
                    res.status(500).send('Body required');
                }
            }
        });
    }
};

