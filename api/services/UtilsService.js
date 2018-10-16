// UtilsService.js - in api/services

const https = require('https');
const axios = require('axios');

module.exports = {
    nativeRequest: function (options, callback, body) {
        let req = https.request(options, function (res) {
            let chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                var body;

                try {
                    body = Buffer.concat(chunks);
                    callback(JSON.parse(body));
                } catch (err) {
                    callback(err.message);
                }
            });
        });

        req.write(body ? JSON.stringify(body) : '');
        req.end();
    },

    axiosGetRequest: function (options, successCallback, errorCallback) {
        return axios.get(options.url, { headers: options.headers });
    }
}