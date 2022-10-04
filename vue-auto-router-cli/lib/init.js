const {promisify} = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');

const {clone} = require('./download.js');
const open = require('open')

const log = content => console.log(chalk.green(content));


// 想要看到安装依赖的打印，就必须控制子进程的流
const spawn = async (...args) => {
    const {spawn} = require('child_process');
    return new Promise(resolve => {
        const process = spawn(...args);
        process.stdout.pipe(process.stdout);
        process.stderr.pipe(process.stderr);
        // npm install完成后
        process.on('close', () => {
            resolve();
        })
    })
}


module.exports = async name => {
    // 打印欢迎页面
    clear();
    const data = await figlet('KKB Welcome!');
    log(data);

    // clone
    log(`创建项目:  ${name}`)
    await clone('su37josephxia/vue-template', name);

    // 自动安装依赖, npm install       并且指定在哪个目录下运行命令
    log('安装依赖');
    await spawn('npm', ['install'], {cwd: `./${name}`});
    log(`
        安装完成:
        To get start:
        ============================
        cd ${name}
        npm run dev
        ============================
    `)


    // 启动
    await spawn('npm', ['run', 'serve'], {cwd: `./${name}`});
    open(`http://localhost:8080`);
}   

