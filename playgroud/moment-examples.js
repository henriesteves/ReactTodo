var moment = require('moment');

console.log(moment().format()); // 2017-04-29T18:07:52-03:00

// January 1st 1970 @ 12:00am -> 0 -> unix time
// January 1st 1970 @ 12:01 -> 60 -> unix time

var now = moment();

console.log('Current timestamp', now.unix()); // Current timestamp 1493500072

var timestamp = 1493500072;
var currentMoment = moment.unix(timestamp);

console.log('Current moment', currentMoment.format()); // Current moment 2017-04-29T18:07:52-03:00
console.log('Current moment', currentMoment.format('MMM')); // Current moment Apr
console.log('Current moment', currentMoment.format('MMM D, YY @ h:mm a')); // Current moment Apr 29, 17 @ 6:07 pm

// January 3rd, 2017 @ 12:00 AM
console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A')); // Current moment April 29th, 2017 @ 6:07 PM