// Node.js 提供的最佳解决方案之一是将单个进程划分为多个子进程，称为workers。
// 因此，通过一个Cluster模块，可以将这些复杂的进程划分为更小、更简单的进程，从而显着加快Node中的应用程序。

// 集群模块需要确定代码的哪一部分是父进程或主进程，哪一部分是worker的。
var cluster = require('cluster');
var http = require('http');
var numCPUs = 4;

if (cluster.isMaster) {
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
} else {
	http.createServer(function(req, res) {
		res.writeHead(200);
		res.end('process ' + process.pid + ' says hello!');
	}).listen(8000);
}