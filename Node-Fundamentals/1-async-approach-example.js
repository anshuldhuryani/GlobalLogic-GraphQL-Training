const fs = require('fs');

/* Asynchronous Approach (Non Blocking Approach) */

fs.readFile('./data/file-one.txt', function(err, data) {
    if(err) throw err;
    console.log(data.toString());
});
fs.readFile('./data/file-two.txt', function(err, data) {
    if(err) throw err;
    console.log(data.toString());
});
