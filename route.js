const http = require('http');
const url = require('url');
module.exports = http.createServer((req, res) => {
    var dateDiffController = require('./dateDiffController.js');
    const reqUrl =  url.parse(req.url, true);
// GET endpoint
    if(reqUrl.pathname == '/dateDiff' && req.method === 'GET') {
        console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
        dateDiffController.findDateDifference(req, res);
    }
});