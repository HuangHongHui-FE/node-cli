// 文档地址

const xCrawl = require("x-crawl");
const myXCrawl = xCrawl({
  mode: "async",
  enableRandomFingerprint: true, // 设置设备指纹识别是为了避免通过指纹识别从不同位置识别和跟踪我们。
  maxRetry: 3,
  intervalTime: { max: 3000, min: 2000 },
  // crawlPage: { launchBrowser: { headless: false } },  // 禁用无头模式
});

myXCrawl.startPolling({ d: 1 }, async (count, stopPolling) => {
  // Call crawlPage API to crawl Page
  const res = await myXCrawl.crawlPage({
    targets: [
      "https://www.airbnb.cn/s/experiences",
      "https://www.airbnb.cn/s/plus_homes",
    ],
    viewport: { width: 1920, height: 1080 },
  });

  // Store the image URL to targets
  const targets = [];
  const elSelectorMap = ["._fig15y", "._aov0j6"];
  for (const item of res) {
    const { id } = item;
    const { page } = item.data;

    // Wait for the page to load
    await new Promise((r) => setTimeout(r, 300));

    const urls = await page.$$eval(`${elSelectorMap[id - 1]} img`, (imgEls) => {
      return imgEls.map((item) => item.src);
    });
    targets.push(...urls);

    page.close();
  }
  console.log(targets)

  myXCrawl.crawlFile({ targets, storeDir: "./x-crawl_demo/static/01-start" });
});
