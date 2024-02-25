const fs = require("fs");

// type指的文件地址
function fileSplit(readPath, type, errMsg = "写入失败", sucMsg = "写入成功") {
  fs.readFile(readPath, "utf-8", (err, data) => {
    if (err) {
      console.log(type + errMsg);
    }
    let aArrAll = JSON.parse(data);
    let totalLen = aArrAll.length;
    let danLen = parseInt(totalLen / 4);
    let start = 0;
    let end = danLen;
    for (let i = 1; i < 5; i++) {
        let writePath = `./x-crawl_demo/static/000/${type}/${i}.js`;
      fs.writeFile(
        writePath,
        JSON.stringify(aArrAll.slice(start, end)),
        (err) => {
          if (err) {
            return console.log("跳转地址写入错误");
          }
          console.log("跳转地址写入成功");
        }
      );
      start = end;
      end = end + danLen;
    }
  });
}

fileSplit("./x-crawl_demo/static/000/a.js", 'a');
