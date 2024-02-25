const xCrawl = require("x-crawl");

const myXCrawl = xCrawl()

myXCrawl.crawlPage('https://www.example.com').then(async (res) => {
  const { browser, page } = res.data

  // Get a screenshot of the rendered page
  await page.screenshot({ path: './x-crawl_demo/static/02-截图.png' })

  console.log('Screen capture is complete')

  browser.close()
})