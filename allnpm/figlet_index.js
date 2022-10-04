var figlet = require('figlet');

// 基本使用
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});


// text使用
figlet.text('Boo!', {
    font: 'Ghost',
    horizontalLayout: 'default',  // 水平布局
    verticalLayout: 'default',  // 垂直布局
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});


// textSync的使用
console.log(figlet.textSync('Boo2!', {
    font: 'Standard',
    horizontalLayout: 'fitted',  // default, full, fitted, 'controlled smushing', 'universal smushing'
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true  // 与“宽度”结合使用。如果此选项设置为 true，则库将在限制宽度时尝试在空白处拆分文本。
}));


figlet.metadata('Standard', function(err, options, headerComment) {
    if (err) {
        console.log('something went wrong...');
        console.dir(err);
        return;
    }
    console.dir(options);
    console.log(headerComment);
});


// 获取所有可用字体的列表
figlet.fonts(function(err, fonts) {
    if (err) {
        console.log('something went wrong...');
        console.dir(err);
        return;
    }
    console.dir(fonts);
});


console.log('字体列表的同步版本', figlet.fontsSync());