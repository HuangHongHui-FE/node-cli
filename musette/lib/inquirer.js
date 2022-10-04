// 处理用户输入github的用户名密码,与用户进行交互的库
const inquirer = require('inquirer');

const minimist = require('minimist');

const files = require('./files');



module.exports = {
    askGitHubCredentials: () => {
        const questions = [
            {
                name: 'username',
                type: 'input',
                message: 'Enter your GitHub username or e-mail address:',
                validate: function(value){
                    if(value.length){
                        return true
                    }else{
                        return 'Please enter your GitHub username or e-mail address:'
                    }
                }
            },
            {
                name: 'password',
                type: 'password',
                message: 'Enter your GitHub password:',
                validate: function(value){
                    if(value.length){
                        return true
                    }else{
                        return 'Please enter your GitHub password:'
                    }
                }
            },
        ];

        return inquirer.prompt(questions);
    }
}