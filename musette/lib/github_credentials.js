// 用来存储

const octokit = require('@octokit/rest')();
const Configstore = require('configstore');

const pkg = require('../package.json');

const conf = new Configstore(pkg.name);

const _ = require('lodash');

const inquirer = require('./inquirer')

module.exports = {
    getInstance: () => {
        return octokit;
    },
    gitHubAuth: (token) => {
        octokit.authenticate({
            type: 'oauth',
            token: token
        });
    },

    getStoredGitHubToken: () => {
        return conf.get('github_credentials.token');
    },

    setGitHubCredentials: async () => {
        const credentials = await inquirer.askGitHubCredentials();
        octokit.authenticate(
            _.extend({
                type: 'basic'
            },
                credentials
            )
        )
    },

    registerNewToken: async () => {
        try {
            const response = await octokit.oauthAuthorizatiion.createAuthorization({
                scopes: ['user', 'public_repo', 'repo', 'repo:status'],
                note: 'musette: a cool tool for dev workflow automation'
            })

            const token = response.data.token;
            if (token) {
                conf.set('github_credentials.token', token);
                return token
            }else{
                throw new Error('missing token')
            }
        } catch(error) {
            throw error;
        }
    }
}



