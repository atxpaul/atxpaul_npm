const meow = require('meow');
const {green, yellow, cyan} = require('chalk');

//
const helpText = `
    Usage
        ${green(`npx atxpaul`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}

    Options
        ${yellow(`--no-social`)}     Don't print social info
        ${yellow(`-d`)}, ${yellow(`--debug`)}     Print debug information
        ${yellow(`-v`)}, ${yellow(`--version`)}   Print CLI version

    Commands
        ${cyan(`help`)}            Print CLI help information

    Examples
        npx atxpaul --no-social

`
const options = {
    flags: {
        social: {
            type:'boolean',
            default: true
        },
        debug: {
            type:'boolean',
            default: false,
            alias: 'd'
        },
        version: {
            type:'boolean',
            default: false,
            alias: 'v'
        }
    },
}

module.exports = meow(helpText, options);

