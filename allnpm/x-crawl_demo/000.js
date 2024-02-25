const xCrawl = require("x-crawl");
const fs = require("fs");

const myXCrawl = xCrawl({
  mode: "async",
  enableRandomFingerprint: true, // 设置设备指纹识别是为了避免通过指纹识别从不同位置识别和跟踪我们。
  // maxRetry: 1,
  intervalTime: { max: 3000, min: 2000 },
});
const basic = "http://camcam.cc/category/asian/page/";

myXCrawl.startPolling({ h: 1 }, async (count, stopPolling) => {
  const targets = [];
  for (let i = 1; i <= 127; i++) {
    const url = basic + i + "/";
    targets.push(url);
  }

  // Call crawlPage API to crawl Page
  const res = await myXCrawl.crawlPage({
    targets,
    viewport: { width: 1920, height: 1080 },
  });

  let imgArrAll = [];
  let titleArrAll = [];
  let videoArrAll = [];
  let aArrAll = []

  for (const item of res) {
    let page = item.data.page;
    await new Promise((r) => setTimeout(r, 300));

    const imgs = await page.$$eval(".wpst-trailer", async (con) => {
      const imgArr = [];
      con.forEach((item, index) => {
        imgArr.push(item.poster);
      });

      return imgArr;
    });
    imgArrAll.push(...imgs);

    const titles = await page.$$eval(".title", (con) => {
      const titleArr = [];
      con.forEach((item, index) => {
        titleArr.push(item.innerHTML);
      });
      return titleArr;
    });
    titleArrAll.push(...titles);

    const videos = await page.$$eval(".wpst-trailer > source", (con) => {
      const videoArr = [];
      con.forEach((item, index) => {
        videoArr.push(item.src);
      });
      return videoArr;
    });
    videoArrAll.push(...videos);

    const a = await page.$$eval(".thumb-block > a", (con) => {
      const aArr = [];
      con.forEach((item, index) => {
        aArr.push(item.href);
      });
      return aArr;
    });
    aArrAll.push(...a);
    
    page.close();
  }
  // console.log(imgArrAll.length, titleArrAll.length, videoArrAll.length, aArrAll.length);

  fs.writeFile("./x-crawl_demo/static/000/images.js", JSON.stringify(imgArrAll), (err) => {
    if (err) {
      return console.log("图片地址写入错误");
    }
    console.log("图片地址写入成功");
  });
  fs.writeFile("./x-crawl_demo/static/000/titles.js", JSON.stringify(titleArrAll), (err) => {
    if (err) {
      return console.log("标题地址写入错误");
    }
    console.log("标题地址写入成功");
  });
  fs.writeFile("./x-crawl_demo/static/000/videos.js", JSON.stringify(videoArrAll), (err) => {
    if (err) {
      return console.log("视频地址写入错误");
    }
    console.log("视频地址写入成功");
  });
  fs.writeFile("./x-crawl_demo/static/000/a.js", JSON.stringify(aArrAll), (err) => {
    if (err) {
      return console.log("跳转地址写入错误");
    }
    console.log("跳转地址写入成功");
  });
});
