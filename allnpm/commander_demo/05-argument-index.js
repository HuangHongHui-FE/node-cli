const { Command } = require('commander'); // (normal include)
const program = new Command();

// program
//   .name('connect')
//   .argument('<server>', 'connect to the specified server')
//   .argument('[user]', 'user account for connection', 'guest')
//   .description('Example program with argument descriptions')
//   .action((server, user) => {
//     console.log('server:', server);
//     console.log('user:', user);
//   });

// program.parse();

// Try the following:
//    node 05-argument-index.js --help
//    node 05-argument-index.js main.remote.site
//    node 05-argument-index.js main.remote.site admin





// ...参数

program
  .version('0.1.0')
  .command('rmdir')
  .argument('<dirs...>')
  .action(function (dirs) {
    console.log(dirs);
  });

// node 05-argument-index.js a b c




// 自定义参数处理

function myParseInt(value, dummyPrevious) {
  const parsedValue = parseInt(value, 10);
  return parsedValue;
}

function mySum(value, total) {
  return total + myParseInt(value);
}
program
  .command('add')
  .argument('<first>', 'integer argument', myParseInt)
  .argument('[second]', 'integer argument', myParseInt, 1000)
  .action((first, second) => {
    console.log(`${first} + ${second} = ${first + second}`);
  });

program
  .command('sum')
  .argument('<value...>', 'values to be summed', mySum, 0)
  .action((total) => {
    console.log(`sum is ${total}`);
  });

program.parse();

// Try the following:
//    node 05-argument-index.js add --help
//    node 05-argument-index.js add 2
//    node 05-argument-index.js add 12 56
//    node 05-argument-index.js sum 1 2 3

