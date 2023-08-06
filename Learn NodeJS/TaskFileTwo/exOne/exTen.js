var querystring = require("querystring");
const input = "name=value&key=value2";
var q = querystring.parse(input);
console.log(q);
