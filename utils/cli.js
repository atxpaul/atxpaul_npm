const meow = require('meow');
const {green, yellow, cyan, dim} = require('chalk');

//
const helpText = `
    Usage
        ${green(`npx atxpaul`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}

    Options
        ${yellow(`--social`)}        Print social info ${dim(`(DEFAULT: true)`)}
        ${yellow(`--no-social`)}     Don't print social info
        ${yellow(`--bio`)}           Print bio info ${dim(`(DEFAULT: true)`)}
        ${yellow(`--no-bio`)}        Don't print bio info
        ${yellow(`--clear`)}         Clear the console ${dim(`(DEFAULT: true)`)}
        ${yellow(`--no-clear`)}      Don't clear the console
        ${yellow(`-m`)}, ${yellow(`--minimal`)}   Print minimal info
        ${yellow(`-d`)}, ${yellow(`--debug`)}     Print debug info
        ${yellow(`-v`)}, ${yellow(`--version`)}   Print CLI version

    Commands
        ${cyan(`help`)}            Print CLI help info

    Examples
        npx atxpaul --no-social

`
const options = {
    flags: {
        minimal:{
            type:'boolean',
            alias:'m'
        },
        clear:{
            type:'boolean',
            default: true,
            alias:'c'
        },
        bio:{
            type:'boolean',
            default: true
        },
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
        },
        help: {
            type:'boolean',
            default: false,
            alias: 'h'
        }
    },
}

module.exports = meow(helpText, options);

