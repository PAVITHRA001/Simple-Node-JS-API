exports.findDateDifference = function(date1, date2) {
  let secDiff = Math.floor((date2.getTime() - date1.getTime())/1000);
  let minDiff = Math.floor(secDiff / 60);
  let hoursDiff = Math.floor(minDiff / 60);
  let daysDiff = Math.floor(hoursDiff / 24);
  let yearDiff = date2.getFullYear() - date1.getFullYear();
  let monthDiff = (yearDiff * 12) + (date2.getMonth() - date1.getMonth()) ;
  return {
    daysDiff: daysDiff > 0 ? `${daysDiff} days` : `${daysDiff} day`,
    monthDiff: monthDiff > 0 ? `${monthDiff} months` : `${monthDiff} month`,
    yearDiff: yearDiff > 0 ? `${yearDiff} years`: `${yearDiff} year`,
    hoursDiff:`${hoursDiff} hours`,
    minDiff:`${minDiff} minutes`,
    secDiff:`${secDiff} seconds`
  }
};
