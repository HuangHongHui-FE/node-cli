// 一个集群模块包含几个事件。最常见的是online事件，
// 表示一个worker的激活，以及exit，表示worker的结束。

var cluster = require('cluster');

if(cluster.isMaster) {
	var numWorkers = require('os').cpus().length;

	for(var i = 0; i < numWorkers; i++) {
		cluster.fork();
	}

	cluster.on('online', function(worker) {
		console.log('Worker ' + worker.process.pid + ' is online');
	});

	cluster.on('exit', function(worker, code, signal) {
		console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
		console.log('Starting a new worker');
		cluster.fork();
	});
} else {
	var app = require('express')();
	app.all('/*', function(req, res) {
		for(var i = 0; i < 999999; i++) {}
		res.send('process ' + process.pid + ' says hello!').end();
	})

	var server = app.listen(8000, function() {
		console.log('Process ' + process.pid + ' is listening to all incoming requests');
	});
}