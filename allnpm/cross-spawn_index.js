const spawn = require('cross-spawn');

const child = spawn('npm',
    ['list', '-g', '-depth', '0'],
    {
        stdio: 'inherit', // 仅在当前运行环境为 Windows 时，才使用 shell
        shell: process.platform === 'win32'
    });

const result = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });