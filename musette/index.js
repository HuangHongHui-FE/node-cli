const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const musette = require('commander');

const files = require('./lib/files');

const github = require('./lib/github_credentials')

musette
    .command('init')
    .description('Drap app banner')
    .action(() => {
        clear();
        console.log(chalk.magenta(figlet.textSync('musette', { horizontalLayout: 'full' })));
    })

musette
    .command('octocheck')
    .description('check user GitHub credentials')
    .action(async () => {
        let token = github.getStoredGitHubToken();

        if(!token){
            await github.setGitHubCredentials();
            token = await github.registerNewToken();
        }

        console.log(token);
    })


musette.parse(process.argv);

if(!musette.args.length){
    musette.help();
}