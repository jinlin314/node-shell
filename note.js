var commands = require('./commands');
const chalk = require('chalk');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();
  var cmdList = cmd.split(/\s*\|\s*/g);
  var firstCommand = cmdList.shift();Base Linter
  var userCommand = firstCommand.split(' ')[0];

  var arg = firstCommand.split(' ').slice(1).join(' ');

  if (!commands.hasOwnProperty(userCommand)){
    process.stdout.write(chalk.red(userCommand + " is not a valid command" + '\n'));
  }else{
    commands[userCommand](arg);
  }
});
