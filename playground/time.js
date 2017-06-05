let moment = require('moment');

let createdAt = 123400000000;
let date = moment(createdAt);
console.log(date.format('MMM Do, YYYY h:mm a'));
