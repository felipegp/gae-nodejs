// VisitsService.js - in api/services

const crypto = require('crypto');
const visitsRepository = require('../db/VisitsRepository');

module.exports = {
    insertAndGetVisits: function (req, sucess, error) {
        const visit = {
            timestamp: new Date(),
            // Store a hash of the visitor's ip address
            userIp: crypto.createHash('sha256').update(req.ip).digest('hex').substr(0, 7)
        };

        visitsRepository.insertVisit(visit)
            .then(() => visitsRepository.getLastVisits())
            .then((visits) => sucess(visits))
            .catch(error)
    }
}