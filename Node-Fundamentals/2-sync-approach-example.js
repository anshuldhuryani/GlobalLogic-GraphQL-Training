const fs = require('fs');

/* Synchronous Apporach (Blocking Approach) */

var data1 = fs.readFileSync('./data/file-one.txt', 'utf-8');
console.log(data1);

var data2 = fs.readFileSync('./data/file-two.txt', 'utf-8');
console.log(data2);

