#!/usr/bin/env node

//Dependencies
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const sym = require('log-symbols');

//Stuff
const log = console.log;
const twitterClr = chalk.bgHex(`#1da1f2`).black;

//Alerts
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword(`orange`);
const error = chalk.red;

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

log(`
${sym.success} ${success(` SUCCESS `)} Thanks for checking my npm!

`);

/*
${sym.info} ${info(` INFO `)} You can be satisfied

${sym.warning} ${warning(` WARNING `)} Stay alert for new updates

${sym.error} ${error(` ERROR `)} No new updates soon
*/