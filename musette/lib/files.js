const fs = require('fs');
const path = require('path');

module.exports = {
    
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd())
    },

    // 判断文件是否存在
    directoryExists: (filePath) => {
        try {
            return fs.statSync(filePath).isDirectory();
        } catch {
            return false;
        }
    },

    // 检查是否存在git仓库
    isGitRepository: () => {
        if(files.directoryExists('.git')){
            console.log(chalk.red('Sorry! Can\`t create a new repo because this directory is already inside a git repository!'));
            // 告诉用户无法创建就退出进程
            process.exit();
        }
    }
}


// path.basename(path.dirname(fs.realpathSync(__filename)));