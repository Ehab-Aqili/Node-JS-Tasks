const url = require('url');

const urlString = 'http://www.example.com:8080/path?query=value#fragment';

const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl);
