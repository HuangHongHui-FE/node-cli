// 根据a链接获取完整的iframe链接，多进程

fs.readFile("./000/a.js", "utf-8", (err, data) => {
  if (cluster.isMaster) {
    for (var i = 0; i < num; i++) {
      const worker = cluster.fork();
      worker.on("message", function (message) {
        if (message.type == "z") {
          // 。。。
            fs.writeFile();
        }
      })
    }
    setTimeout(() => {
      for (var wid in cluster.workers) {
        cluster.workers[wid].send({})
      }
    }, 2000);
  } else {
    process.on("message", function (message) {
      if (message.type === "a") {
        const { start, end } = message.data;
        const iframeAllArrAll = [];
        // 子进程处理逻辑
        // 完成后
          process.send({
            type: "z",
            from: "Worker " + process.pid,
            data: {
              id: cluster.worker.id,
              result: iframeAllArrAll,
            },
          });
      }
    });
  }
});
