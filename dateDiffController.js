const url = require('url');
const dateDiffService = require('./dateDiffService.js');

exports.findDateDifference = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    let date1 = reqUrl.query.start_date.trim();
    let date2 = reqUrl.query.end_date.trim();
    const [year1, month1, day1] = date1.split("-");
    const [year2, month2, day2] = date2.split("-");
    const date_regex = new RegExp('\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])*');
    if (!(date_regex.test(date1)) || !(date_regex.test(date2))) {
        res.statusCode = 400;
        res.end('Dates are in wrong format');
    }
    else {
        date1 = new Date(year1, month1, day1);
        date2 = new Date(year2, month2, day2);
        const difference = dateDiffService.findDateDifference(date1, date2);
        res.statusCode = 200;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(difference));
    }
};
