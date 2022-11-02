const { program } = require("commander");

// program
//   .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');

// program.parse();

// console.log(`cheese: ${program.opts().cheese}`);

// $ node ./03-option-index.js
// cheese: blue
// $ node ./03-option-index.js --cheese stilton
// cheese: stilton




// --no
// program
//   .option('--no-sauce', 'Remove sauce')
//   .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
//   .option('--no-cheese', 'plain with no cheese')
//   .parse();

// const options = program.opts();
// console.log(options)


// $ node ./03-option-index.js
// $ node ./03-option-index.js --sauce
// $ node ./03-option-index.js --cheese=blue
// $ node ./03-option-index.js --no-sauce --no-cheese



// 必选
// program
//   .requiredOption('-c, --cheese <type>', 'pizza must have cheese');

// program.parse();

// $ node 03-index.js



// 变长参数选项
program
  .option('-n, --number <numbers...>', 'specify numbers')
  .option('-l, --letter [letters...]', 'specify letters');

program.parse();

console.log('Options: ', program.opts());
console.log('Arguments: ', program.args);

// $ node ./03-option-index.js -n 1 2 3 --letter a b c
// $ node ./03-option-index.js --letter=A -n80 operand  // !
// $ node ./03-option-index.js --letter -n 1 -n 2 3 -- operand