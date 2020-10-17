#!/usr/bin/env node


const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;
const twitterClr = chalk.bgHex(`#1da1f2`).black

welcome({
    title:pkgJSON.name,
    tagLine:`Nice to meet ya fella!`,
    description:pkgJSON.description,
    version:pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true

})



log(`
Hello fellas!

${chalk.blue.underline(`Pablo Pan Veira`)} - ${chalk.bgYellow.black.bold(` Javascript Developer `)}

${chalk.italic.yellow(`Team Leader | Javascript lover | Agile thinker | Rib cooker`)}

${twitterClr(` Twitter `)}: https://twitter.com/code4paul
`)