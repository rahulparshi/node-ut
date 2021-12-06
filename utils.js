const request = require('request');
exports.getAPICALL = (url, defaultResponse = {}) => {
    return new Promise((resolve, reject) => {
        console.log(`API URL ${url} invoking.............`);
        const options = {
            method: "GET",
            uri: url,
            headers: { 'Content-Type': 'application/json' }
        };
        request(options, (err, response, body) => {
            if (err) {
                console.log(`Error while calling getAPICALL API ${url}`, err);
                resolve(defaultResponse);
            } else {
                const status = { statusCode: response.statusCode, statusMessage: response.statusMessage };
                try {
                    if (response.statusCode === 200) {
                        const responseBody = JSON.parse(body);
                        resolve(responseBody);
                    } else {
                        console.log(`getAPICALL API call is not successful ${url}`, status);
                        resolve(defaultResponse);
                    }
                } catch (err) {
                    console.log(`Error while parsing body with ${url}`, err);
                    resolve(defaultResponse);
                }
            }
        });
    });
} 