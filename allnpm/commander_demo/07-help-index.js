const {program} = require('commander')

// program
//   .description('An application for pizza ordering')
//   .option('-p, --peppers', 'Add peppers')
//   .option('-c, --cheese <type>', 'Add the specified type of cheese', 'marble')
//   .option('-C, --no-cheese', 'You do not want any cheese');

// program.parse();

// const options = program.opts();
// console.log('you ordered a pizza with:');
// if (options.peppers) console.log('  - peppers');
// const cheese = !options.cheese ? 'no' : options.cheese;
// console.log('  - %s cheese', cheese);



// Try the following on macOS or Linux:
//    node 07-help-index.js --help    
//
// Try the following:
//    node 07-help-index.js --help    
//    node 07-help-index.js --peppers --cheese=blue
//    node 07-help-index.js --no-cheese





// 自定义帮助
// beforeAll：作为全局标头栏展示
// before：在内建帮助信息之前展示
// after：在内建帮助信息之后展示
// afterAll：作为全局末尾栏展示
// beforeAll和afterAll两个参数作用于命令及其所有的子命令。

// program
//   .option('-f, --foo', 'enable some foo');

// program.addHelpText('before', `
// Example call:
//   $ custom-help --help`);

// program.parse(process.argv);

// Try the following:
//    node 07-help-index.js --help





// 、在出错后展示帮助信息
// program.showHelpAfterError();
// 或者
program.showHelpAfterError('(add --help for additional information)');




// 禁用错误拼写的提示
// program.showSuggestionAfterError(false);