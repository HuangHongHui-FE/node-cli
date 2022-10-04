const fs = require('fs');

const handlebars = require('handlebars');

const chalk = require('chalk');

module.exports = async () => {
    // 获取列表
    const list = fs.readdirSync('./src/views')
        .filter(v => v !== 'Home.vue')
        .map(v => ({
            name: v.replace('.vue', '').toLowerCase(),
            file: v
        }))

    // 生成路由定义
    compile({list}, './src/router.js', './templete/router.js.hbs');

    // 生成菜单
    compile({list}, './src/App.vue', './templete/App.vue.hbs');
    // 模板编译，
    function compile(meta, filePath, templatePath){  // 数据定义， 目标文件， 模板文件
        if(fs.existsSync(templatePath)){
            const content = fs.readFileSync(templetePath).toString();

            const result = handlebars.compile(content)(meta);
            fs.writeFileSync(filePath, result);

            console.log(`${filePath} 创建成功`);
        }
    }
}