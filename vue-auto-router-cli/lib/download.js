const {promisify} = require('util');
const ora = require('ora');
const download = promisify(require('download-git-repo'));

module.exports.clone = async function(repo, desc){  // 链接，下载到那个文件夹里
    const process = ora(`下载....${repo}`);

    process.start();
    await download(repo, desc);
    process.succeed();
}