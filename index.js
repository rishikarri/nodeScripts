var fs = require('fs');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
// process.stdout.write('asdf');

// fs.createReadStream(__filename).pipe(process.stdout); // read file and pipe directly to sstdout 

// __filename refers to teh file we are in 

// node exits when it runs out of things to do 


// exec('cat index.js' , function(err, stdout, stderr) {
// 	console.log('we got our catted file', stdout);
// })


// process.execPath // path to currrent version of node js that is running this script

process.stdout.write(process.execPath)