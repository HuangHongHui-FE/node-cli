const fs = require("fs");
const xCrawl = require("x-crawl");

const myXCrawl = xCrawl({
  mode: "sync",
  enableRandomFingerprint: true, // 设置设备指纹识别是为了避免通过指纹识别从不同位置识别和跟踪我们。
  // maxRetry: 1,
  // intervalTime: { max: 3000, min: 2000 },
  // timeout: 30000
});

// 读取a标签获取页面里的iframe链接
fs.readFile("./static/000/a/1.js", "utf-8", (err, data) => {
  if (err) {
    return console.log("读取失败");
  }
  let aArrAll = JSON.parse(data); // 2536  845
  const iframeAllArrAll = [];
  myXCrawl.startPolling({ d: 1 }, async (count, stopPolling) => {
    // 每一个aArrAll的item都会开一个chrome
    await myXCrawl.crawlPage({
      targets: aArrAll,
      viewport: { width: 1920, height: 1080 },
      onCrawlItemComplete: async (res) => {
        let { page } = res.data;
        const iframeAll = await page.$$eval(
          ".responsive-player > iframe",
          (con) => {
            const iframeAllArr = [];
            con.forEach((item, index) => {
              iframeAllArr.push(item?.src);
            });
            return iframeAllArr;
          }
        );
        iframeAllArrAll.push(...iframeAll);
        page.close();
      },
    });

    await new Promise((r) => setTimeout(r, 9000));

    console.log("length---", iframeAllArrAll.length);
    fs.writeFile(
      "./static/000/iframe/1.js",
      JSON.stringify(iframeAllArrAll),
      (err) => {
        if (err) {
          return console.log("iframe1地址写入错误");
        }
        console.log("iframe1写入成功");
      }
    );
  });
});
