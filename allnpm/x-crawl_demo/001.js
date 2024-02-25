const fs = require("fs");
const xCrawl = require("x-crawl");

const myXCrawl = xCrawl({
  mode: "sync",
  enableRandomFingerprint: true, // 设置设备指纹识别是为了避免通过指纹识别从不同位置识别和跟踪我们。
  // maxRetry: 1,
  // intervalTime: { max: 5000, min: 4000 },
  // timeout: 30000
});

// 图片的下载
// fs.readFile("./x-crawl_demo/static/000/images.js", "utf-8", (err, data) => {
//   if (err) {
//     return console.log("读取失败");
//   }
//   let imgArrAll = JSON.parse(data);
//   myXCrawl.crawlFile({
//     targets: imgArrAll,
//     storeDir: "./x-crawl_demo/static/000/images",
//   });
// });

// 不完整的视频的下载
// fs.readFile("./x-crawl_demo/static/000/videos.js", "utf-8", (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//   let videoArrAll = JSON.parse(data);
//   myXCrawl.crawlFile({
//     targets: videoArrAll,
//     storeDir: "./x-crawl_demo/static/000/videos",
//   });
// });



// 完整的视频的下载
fs.readFile('./x-crawl_demo/static/000/videos_all.js', (err, data) => {
    if(err){
        return console.log('读取失败');
    }
    let videoAllArrAll = JSON.parse(data).slice(77);
    myXCrawl.crawlFile({ targets: videoAllArrAll, storeDir: "./x-crawl_demo/static/000/videos_all" });
})
