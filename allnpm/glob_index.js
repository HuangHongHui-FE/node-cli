// 文章参考
// https://www.cnblogs.com/liulangmao/p/4552339.html

var glob = require("glob");


// 1. * : 匹配该路径段中0个或多个任意字符:
//获取js目录下的所有js文件.(不包括以'.'开头的文件)
glob("../allnpm/*.js", function (er, files) {
    console.log(files)
})



// // 2. ? : 匹配该路径段中1个任意字符:
// //获取js目录下所有名字只有1个字的js.
glob("../allnpm/?.js", function (er, files) {
    console.log(files)
})


// // 3. [...] : 匹配该路径段中在指定范围内字符:
// //获取js目录下a开头,第二个字符为0-3之间(包括0和3)的js(a03.js不能被匹配到) 注意不能组合,只能是其中一个字符
// glob("js/a[0-3].js",function (er, files) {
//  console.log(files)
// })




// // 同步获取
// var files = glob.sync(pattern, [options])