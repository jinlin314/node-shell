var commands = require('./commands');
const chalk = require('chalk');

// Output a prompt
var prompt = function(){
  process.stdout.write(chalk.yellow('prompt > '));
}



// ============= start of our bash shell =============//
  prompt();
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  //process.stdout.write('You typed: ' + cmd );

  var userCommand = cmd.split(' ')[0];
  var arg = cmd.split(' ').slice(1);

  if (!commands.hasOwnProperty(userCommand)){
    process.stdout.write(chalk.red(cmd + " is not a valid command" + '\n'));
  }else{
    commands[userCommand](arg);
  }

  // prompt for next inputs
  // console.log('\n');
  prompt();
});
