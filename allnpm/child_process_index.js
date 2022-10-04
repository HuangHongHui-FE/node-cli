// 推荐读https://www.cnblogs.com/chyingp/p/node-learning-guide-child_process.html

// 例子1
const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

// 例子2
// var exec = require('child_process').exec;

// // 成功的例子
// exec('ls', function(error, stdout, stderr){
//     if(error) {
//         console.error('error: ' + error);
//         return;
//     }
//     console.log(stdout);
//     console.log(stderr);
// });

// // 失败的例子
// exec('ls hello.txt', function(error, stdout, stderr){
//     if(error) {
//         console.error('error: ' + error);
//         return;
//     }
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
// });