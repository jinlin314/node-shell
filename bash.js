// console.log(process);

// Output a prompt
var prompt = function(){
  process.stdout.write('prompt > ');
}

var pwd = function(){
  var argvs = process.argv[1].split('/');
  var path = argvs.slice(0, argvs.length-1);
  return path.join('/');
}



// ============= start of our bash shell =============//
  prompt();
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  //process.stdout.write('You typed: ' + cmd );

  switch (cmd) {
    case 'pwd':
      process.stdout.write(pwd() + '\n');
      break;

    case 'date':
      process.stdout.write(Date() + '\n');
      break;
    default:
      prompt();

  }

  // prompt for next inputs
  // console.log('\n');
  prompt();
});
