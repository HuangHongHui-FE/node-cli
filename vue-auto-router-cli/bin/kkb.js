#!/usr/bin/env node
// 指定node解释器来运行

// console.log('cli------');

const program = require('commander');


// 有了版本号命令 kkb -V
program.version(require('../package.json').version);


program
    .command('init <name>')
    .description('init project  ')
    .action(require('../lib/init.js'));


program
    .command('refresh')
    .description('refresh routers and menu')
    .action(require('../lib/refresh.js'));

program.parse(process.argv);