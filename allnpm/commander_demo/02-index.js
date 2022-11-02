const { Command } = require('commander'); // (normal include)
// const { Command } = require('../'); // include commander in git clone of commander repo
const program = new Command();


program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('split')
  .description('Split a string into substrings and display as an array.')
  .argument('<字符串>', '字符串split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')  // 注意这里的默认值
  .action((str, options) => {
    console.log(str, options);
  });


program.parse();

// Try the following:
//    node 02-index.js
//    node 02-index.js help split
//    node 02-index.js split --separator=/ a/b/c
//    node 02-index.js split --first a,b,c