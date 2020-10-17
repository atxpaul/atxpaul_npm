#!/usr/bin/env node


const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

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



console.log(`
Hello!
Pablo Pan Veira - Developer & Team Leader

Twitter: https://twitter.com/code4paul
`)