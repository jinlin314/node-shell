
var fs = require('fs');
const chalk = require('chalk');

var done = function(output){
  process.stdout.write(chalk.yellow(output + '\n'));
  process.stdout.write(chalk.yellow('prompt > '));
}


module.exports = {
  pwd : function(cmd){ done(process.cwd());},

  date : function(cmd){ done(Date().toString());},

  // read and concat the input files, prints them to the terminal
  cat : function(arg){
    var files = arg.split(' ');
    var contents = [];

    files.forEach(function(file, index){
      fs.readFile(file, 'utf8', function(err, fileContents){
        if (err) process.stdout.write(err);
        else{
          contents[index] = fileContents.toString();
          if(contents.length === files.length){
            done(contents.join('\n'));
          }
        }
      });// end of readFile callback function
    });// end of file.forEach callback funciton
  },

  // output the first part of files (first 10 lines)
  head : function(arg){
    // filename = arg[0];
    // later will rivise it to multiple files
    filename = arg;
    fs.readFile(filename, 'utf8', function(err, contents){
      if (err) process.stdout.write(err);
      else{
        var dataArray = contents.trim().split('\n');
        var output = '';

        for (var i = 0; i < 10 && i < dataArray.length; i++){
          output += dataArray[i] + '\n';
        }

        done(output);
      }
    });
  },

  // output the first part of files (first 10 lines)
  tail : function(arg){
    // filename = arg[0];
    // later will rivise it to multiple files
    filename = arg;
    fs.readFile(filename, 'utf8', function(err, contents){
      if (err) process.stdout.write(err);
      else{
        var dataArray = contents.trim().split('\n');
        var output = '';
        var i = (dataArray.length - 10 < 0) ? i=0 : i = dataArray.length - 10;

        for (i; i < dataArray.length; i++){
          output += dataArray[i] + '\n';
        }
        done(output);
      }
    });
  },

  ls : function(cmd){
    fs.readdir('.', function(err, files){
      if (err) process.stdout.write(err);
      var output = '';

      files.forEach((file)=> output += file + '\t');
      done(output);
    })
  },

  echo : function(arg){
    if(arg[0] === '$'){
      var enVar = arg.slice(1);
      if(process.env[enVar.toUpperCase()]){
        output = process.env[enVar.toUpperCase()];
      }
    }else{
      output = arg;
    }
    done(output);
  },

  pipe : function(arg){

  }
}
