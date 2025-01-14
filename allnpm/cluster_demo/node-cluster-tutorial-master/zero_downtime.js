var cluster = require('cluster');

// 获取当前正在运行的worker的id，并将其保存在一个名为workerIds的数组中；
// 要求安全关闭每个正在运行的工作人员；
// 如果 5 秒内没有安全关机，则通过kill命令强制关机。
let	restartWorkers = function restartWorkers() {
		var wid, workerIds = [];

		// create a copy of current running worker ids
		for (wid in cluster.workers) {
			workerIds.push(wid);
		}

		workerIds.forEach(function (wid) {
			cluster.workers[wid].send({
				text: 'shutdown',
				from: 'master'
			});

			setTimeout(function () {
				if (cluster.workers[wid]) {
					cluster.workers[wid].kill('SIGKILL');
				}
			}, 5000);
		});
	};
	



if (cluster.isMaster) {
	var numWorkers = require('os').cpus().length,
		fs = require('fs'),
		i, worker;

	for (i = 0; i < numWorkers; i++) {
		worker = cluster.fork();
		worker.on('message', function () {
			console.log('arguments', arguments);
		});
	}

	// set up listener of file changes for restarting workers
	fs.readdir('.', function (err, files) {
		files.forEach(function (file) {
			fs.watch(file, function () {
				restartWorkers();
			});
		});
	});

	cluster.on('exit', function (_worker, code, signal) {
		console.log('Worker ' + _worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
		// Starting a new worker
		worker = cluster.fork();
		worker.on('message', function () {
			console.log('arguments', arguments);
		});
	});
} else {
	process.on('message', function (message) {
		if (message.text === 'shutdown') {
			process.exit(0);
		}
	});
	
	console.log('Worker ' + process.pid + ' is alive!');
}
