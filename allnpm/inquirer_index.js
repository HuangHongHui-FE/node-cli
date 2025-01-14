// 与用户进行信息交互的库

// 由于交互的问题种类不同，inquirer为每个问题提供很多参数：

// type：表示提问的类型，包括：input, confirm, list, rawlist, expand, checkbox, password, editor；
// name: 存储当前问题回答的变量；
// message：问题的描述；
// default：默认值；
// choices：列表选项，在某些type下可用，并且包含一个分隔符(separator)；
// validate：对用户的回答进行校验；
// filter：对用户的回答进行过滤处理，返回处理后的值；
// transformer：对用户回答的显示效果进行处理(如：修改回答的字体或背景颜色)，但不会影响最终的答案的内容；
// when：根据前面问题的回答，判断当前问题是否需要被回答；
// pageSize：修改某些type类型下的渲染行数；
// prefix：修改message默认前缀；
// suffix：修改message默认后缀。

const inquirer = require('inquirer');

// input
// const promptList = [{
//     type: 'input',
//     message: '设置一个用户名:',
//     name: 'name',
//     default: "test_user" // 默认值
// }, {
//     type: 'input',
//     message: '请输入手机号:',
//     name: 'phone',
//     validate: function (val) {
//         if (val.match(/\d{11}/g)) { // 校验位数
//             return val;
//         }
//         return "请输入11位数字";
//     }
// }];


// confirm
// const promptList = [{
//     type: "confirm",
//     message: "是否使用监听？",
//     name: "watch",
//     prefix: "前缀"
// }, {
//     type: "confirm",
//     message: "是否进行文件过滤？",
//     name: "filter",
//     suffix: "后缀",
//     when: function (answers) {  // 当watch为true的时候才会提问当前问题
//         return answers.watch
//     }
// }];


// list
// const promptList = [{
//     type: 'list',
//     message: '请选择一种水果:',
//     name: 'fruit',
//     choices: [
//         "Apple",
//         "Pear",
//         "Banana"
//     ],
//     filter: function (val) { // 使用filter将回答变为小写
//         return val.toLowerCase();
//     }
// }];



// rawList
// const promptList = [{
//     type: 'rawlist',
//     message: '请选择一种水果:',
//     name: 'fruit',
//     choices: [
//         "Apple",
//         "Pear",
//         "Banana"
//     ]
// }];




// expand     可以输入一个key来排除，适用于选项较多的时候
// const promptList = [{
//     type: "expand",
//     message: "请选择一种水果：",
//     name: "fruit",
//     choices: [
//         {
//             key: "a",
//             name: "Apple",
//             value: "apple"
//         },
//         {
//             key: "O",
//             name: "Orange",
//             value: "orange"
//         },
//         {
//             key: "p",
//             name: "Pear",
//             value: "pear"
//         }
//     ]
// }];



// checkbox  、、 多选以及分隔符的·使用
// const promptList = [{
//     type: "checkbox",
//     message: "选择颜色:",
//     name: "color",
//     choices: [
//         {
//             name: "red"
//         },
//         new inquirer.Separator(), // 添加分隔符
//         {
//             name: "blur",
//             checked: true // 默认选中
//         },
//         {
//             name: "green"
//         },
//         new inquirer.Separator("--- 分隔符 ---"), // 自定义分隔符
//         {
//             name: "yellow"
//         }
//     ]
// }];


// const promptList = [{
//     type: "checkbox",
//     message: "选择颜色:",
//     name: "color",
//     choices: [
//         "red",
//         "blur",
//         "green",
//         "yellow"
//     ],
//     pageSize: 2 // 设置可见的行数！！！！！！！
// }];




// password
// const promptList = [{
//     type: "password", // 密码为密文输入
//     message: "请输入密码：",
//     name: "pwd"
// }];



// editor
const promptList = [{
    type: "editor",
    message: "请输入备注：",
    name: "editor"
}];




// inquirer.prompt(promptList).then(answers => {
//     console.log('---', answers); // 返回的结果
// })