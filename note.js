var fs = require('fs');

fs.readFile('bash.js', 'utf8', function(err, contents){
 if (err) console.log(err);
 console.log(contents);
});


// read multiple files
var async = require('async'),
   fs = require('fs'),
   files = ['file1.json', 'file2.json'];

async.map(files, fs.readFile, function(err, files) {
   if(err) {
       throw err;
   }

   files.forEach(console.log);
});

//If you wanna be able to read the file contents then replace the last line with

files.forEach(function(file) {
   console.log(file.toString());
});
