//core modules
var fs = require('fs');

//my vars
var file_path = process.argv[2];
var file_contents = fs.readFileSync(file_path);

var output = file_contents.toString().split('\n').length - 1;
console.log(output);
