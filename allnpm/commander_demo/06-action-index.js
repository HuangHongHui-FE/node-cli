const { Command, Option } = require('commander'); // (normal include)
const program = new Command();



// this
// program
//   .command('serve')
//   .argument('<script>')
//   .option('-p, --port <number>', 'port number', 80)
//   .action(function() {
//     console.error('Run script %s on port %s', this.args[0], this.opts().port);
//   });

// program.parse();

// Try the following:
//    node 06-action-index.js serve --port 8080 index.js




// 最后一个参数
// program
//   .argument('<name>')
//   .option('-t, --title <honorific>', 'title to use before name')
//   .option('-d, --debug', 'display some debugging')
//   .action((name, options, command) => {
//     console.log(name, options, command);
//   });

// program.parse();

// Try the following:
//    node 06-action-index.js John
//    node 06-action-index.js Doe --title Mr
//    node 06-action-index.js --debug Doe --title Mr





// 生命周期钩子

// preAction, postAction	本命令或其子命令的处理函数执行前/后	(thisCommand, actionCommand)
// preSubcommand	在其直接子命令解析之前调用	(thisCommand, subcommand)
const timeLabel = 'command duration';
program
  .option('--profile', 'show how long command takes')
  .hook('preAction', (thisCommand) => {
    if (thisCommand.opts().profile) {
      console.time(timeLabel);
    }
  })
  .hook('postAction', (thisCommand) => {
    if (thisCommand.opts().profile) {
      console.timeEnd(timeLabel);
    }
  });

program
  .option('--trace', 'display trace statements for commands')
  .hook('preAction', (thisCommand, actionCommand) => {
    if (thisCommand.opts().trace) {
      console.log('>>>>');
      console.log(`About to call action handler for subcommand: ${actionCommand.name()}`);
      console.log('arguments: %O', actionCommand.args);
      console.log('options: %o', actionCommand.opts());
      console.log('<<<<');
    }
  });

program
  .option('--env <filename>', 'specify environment file')
  .hook('preSubcommand', (thisCommand, subcommand) => {
    if (thisCommand.opts().env) {
      console.log(`Reading ${thisCommand.opts().env}...`);
      process.env.PORT = 80;
      console.log(`About to call subcommand: ${subcommand.name()}`);
    }
  });

program.command('start')
  .argument('[script]', 'script name', 'server.js')
  .option('-d, --delay <seconds>', 'how long to delay before starting')
  .addOption(new Option('-p, --port <number>', 'port number').default(8080).env('PORT'))
  .action(async(script, options) => {
    if (options.delay) {
      await new Promise(resolve => setTimeout(resolve, parseInt(options.delay) * 1000));
    }
    console.log(script, options);
  });

// Some of the hooks or actions are async, so call parseAsync rather than parse.
program.parseAsync().then(() => {});

// Try the following:
//    node 06-action-index.js start
//    node 06-action-index.js start index.js  
//    node 06-action-index.js --trace start --port 9000 test.js
//    node 06-action-index.js --profile start --delay 5
//    node 06-action-index.js --env=production.env start
