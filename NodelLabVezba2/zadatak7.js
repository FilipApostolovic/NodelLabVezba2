var request = require('request');
var fs = require('fs');
request('http://www.ict.edu.rs/').pipe(fs.createWriteStream('./text.html'));