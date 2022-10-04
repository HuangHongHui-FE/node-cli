const chokidar = require('chokidar');

// 监听当前目录
chokidar.watch('.', {  // .这里file, dir, glob, or array都可以
    persistent: false,  // 监听完关闭进程
    ignored: ['./node_modules', './*.js'],  // 过滤的文件，可以写正则, 字符串，[], './node_modules'
    usePolling: true,  // 尽量设置为true, 如果占用CPU过高就改为false,是使用 fs.watchFile（由轮询支持）还是 fs.watch。
    alwaysStat: true,  // 设置true为确保即使在底层监视事件中不可用的情况下也能提供它。
    depth: 1,  // 限制遍历的层数
    interval: 100,  // 文件系统轮询的时间间隔，以毫秒为单位。
    binaryInterval: 300,  // 进制文件的文件系统轮询间隔
    followSymlinks: true,    // 只会监视符号链接本身的更改，而不是跟随链接引用和通过链接路径冒泡事件。
    awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100
    },

    ignorePermissionErrors: false,  // 指示是否监视没有读取权限的文件
    atomic: true
}).on('all', (event, path) => {
    console.log(event, path);
}).on('add', path => log(`File ${path} has been added`))
    .on('change', (path, stats) => {
        if (stats) console.log(`File ${path} changed size to ${stats.size}`);
    })
    .on('unlink', path => log(`File ${path} has been removed`))
    .on('addDir', path => log(`Directory ${path} has been added`))
    .on('unlinkDir', path => log(`Directory ${path} has been removed`))
    .on('error', error => log(`Watcher error: ${error}`))
    .on('ready', () => log('Initial scan complete. Ready for changes'))
    .on('raw', (event, path, details) => { // internal
        log('Raw event info:', event, path, details);
    });



const log = console.log.bind(console);


// Watch new files.新增监视的文件
watcher.add('new-file');
watcher.add(['new-file-2', 'new-file-3', '**/other-file*']);

// 获取文件系统上被监视的实际路径的列表
// var watchedPaths = watcher.getWatched();

// 取消监视的文件
// await watcher.unwatch('new-file*');

// Stop watching.
// watcher.close().then(() => console.log('closed'));
