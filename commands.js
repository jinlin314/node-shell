
var fs = require('fs');
const chalk = require('chalk');

module.exports = {
  pwd : function(cmd){
    var argvs = process.argv[1].split('/');
    var path = argvs.slice(0, argvs.length-1);
    process.stdout.write(chalk.green(path.join('/') + '\n'));
  },

  date : function(cmd){
    process.stdout.write(chalk.green(Date() + '\n'));
  },

  // read and concat the input files, prints them to the terminal
  cat : function(arg){
    filename = arg[0];

    fs.readFile(filename, 'utf8', function(err, contents){
      if (err) console.log(err);
      process.stdout.write(chalk.green(contents + '\n'));
      process.stdout.write(chalk.yellow('prompt > '));
    });
  },

  // output the first part of files (first 10 lines)
  head : function(arg){
    filename = arg[0];
    fs.readFile(filename, 'utf8', function(err, contents){
      if (err) console.log(err);
      dataArray = contents.split('\n');

      for (var i = 0; i < 10 && i < dataArray.length; i++){
        process.stdout.write(chalk.green(dataArray[i] + '\n'));
      }

      process.stdout.write(chalk.yellow('prompt > '));
    });
  },

  // output the first part of files (first 10 lines)
  tail : function(arg){
    filename = arg[0];
    fs.readFile(filename, 'utf8', function(err, contents){
      if (err) console.log(err);
      dataArray = contents.split('\n');
      var i;
      if (dataArray.length - 10 < 0) i = 0;
      else i = dataArray.length - 10;

      for (i; i < dataArray.length; i++){
        process.stdout.write(chalk.green(dataArray[i] + '\n'));
      }

      process.stdout.write(chalk.yellow('prompt > '));
    });
  },

  ls : function(cmd){
    // var argvs = process.argv[1].split('/');
    // var path = argvs.slice(0, argvs.length-1).join('/');
    var files = fs.readdirSync('.');
    files.forEach((file)=>process.stdout.write(chalk.green(file + ' ')));
  },

  echo : function(arg){
    if(arg.toString()=== "$PATH"){
      process.stdout.write(chalk.green(process.env.PATH));
    }
    process.stdout.write(chalk.green(arg.join(' ') + '\n'));
  }
}
