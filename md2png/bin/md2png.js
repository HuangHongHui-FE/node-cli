#!/usr/bin/env node
// 如果需要这个文件是cli的执行入口，就必须在package.json里bin字段声明
const program = require('commander');

const pkg = require('../package.json');
const md2png = require('..');  // 会找package找main字段

// cli入口的作用
// 1. 解析cli参数， process.argv
// 2. 调用模块实现

program.version(pkg.version)
    .usage('<input>')
    .option('-o, --output <output>', '输出文件路径')
    .option('-w, --width <width>', '输出图片宽度')
    // .on('--help', console.log)
    .parse(process.argv)
    .args.length || program.help()


const {args, output, width} = program;
const [input] = args;

// const {input} = args;

console.log(output, width, args)
// console.log(md2png(input, {host}))