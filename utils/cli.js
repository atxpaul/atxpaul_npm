const meow = require('meow');
const meowHelp = require('cli-meow-help')
const {green, yellow, cyan, dim} = require('chalk');

const flags={
    bio:{
        type:'boolean',
        default: true,
        desc:`Prints bio info`
    },
    clear:{
        type:'boolean',
        default: true,
        alias:'c',
        desc:`Clears the console`
    },
    debug: {
        type:'boolean',
        default: false,
        alias: 'd',
        desc:`Prints debug info`
    },
    minimal:{
        type:'boolean',
        alias:'m',
        desc:`Prints minimal info`
    },
    social: {
        type:'boolean',
        default: true,
        desc:`Prints social info`
    },
    version: {
        type:'boolean',
        default: false,
        alias: 'v',
        desc:`Prints the version`
    }};

const commands={
    help: {
        desc:`Print the help info`
    }
};

const helpText = meowHelp({
    name:`npx atxpaul`,
    flags,
    commands
})

const options = {
    inferType:true,
    description:false,
    hardRejection: false,
    flags
}

module.exports = meow(helpText, options);

