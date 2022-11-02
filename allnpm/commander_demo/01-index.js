const {program} = require('commander')

// program.version('0.0.1', '-v, --vers', 'output the current version');
// const options = program.opts();

// program.version('0.0.1');

// console.log(options)




// 自定义参数，设置初始值
function increaseVerbosity(dummyValue, previous) {
  return previous + 1;
}

function collect(value, previous) {
  return previous.concat([value]);
}

function commaSeparatedList(value, dummyPrevious) {
  return value.split(',');
}

program
  .option('-v, --verbose', 'verbosity that can be increased', increaseVerbosity, 0)
  .option('-c, --collect <value>', 'repeatable value', collect, [])
  .option('-l, --list <items>', 'comma separated list', commaSeparatedList)
;

program.parse();

const options = program.opts();
console.log(options);



// $ node 01-index.js -v -v -v
// verbose: 3
// $ node 01-index.js -c a -c b -c c
// [ 'a', 'b', 'c' ]
// $ node 01-index.js --list x,y,z
// [ 'x', 'y', 'z' ]