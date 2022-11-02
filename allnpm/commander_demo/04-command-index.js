const commander = require('commander'); // (normal include)
// const commander = require('../'); // include commander in git clone of commander repo
const program = new commander.Command();

program
  .command('serve', { isDefault: true })
  .description('launch web server')
  .option('-p,--port <port_number>', 'web port')
  .action((options) => {
    console.log(options)
    console.log(`server on port ${options.port}`);
  });

program.parse(process.argv);


// Try the following:
//    node 04-index.js serve -p 8080