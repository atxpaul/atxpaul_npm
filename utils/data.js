const chalk = require('chalk');


const twitterClr = chalk.bgHex(`#1da1f2`).black;
const dim = chalk.dim;


const social = `
${twitterClr(` Twitter `)} ${dim(`https://twitter.com/code4paul`)}`
const bio = `
Hello fellas!

${chalk.blue.underline(`Pablo Pan Veira`)} - ${chalk.bgYellow.black.bold(` Javascript Developer `)}

${chalk.italic.yellow(`Team Leader | Javascript lover | Agile thinker | Rib cooker`)}`

const msg={
    msg:`for checking my npm!`,
    name:`Thanks`
}
module.exports = {
    bio,
    social,
    msg
}