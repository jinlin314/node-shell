var commands = require('./commands');
const chalk = require('chalk');

// ============= start of our bash shell =============//

process.stdout.write(chalk.yellow('prompt > '));
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();

  var userCommand = cmd.split(' ')[0];
  var arg = cmd.split(' ').slice(1).join(' ');

  if (!commands.hasOwnProperty(userCommand)){
    process.stdout.write(chalk.red(cmd + " is not a valid command" + '\n'));
  }else{
    commands[userCommand](arg);
  }

});
