#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(0));
console.log('argv---', argv);

// 输入  node cmd.js xxx sss xxx sss xxx

var argvGlo = require('minimist')(process.argv.slice(2), opts={});
console.dir('argvGlo---', argvGlo);

// node minimist_index.js -u root -p password password1 password2
// node minimist_index.js -a -b testing