const unhandled = require('cli-handle-unhandled');
const welcome = require('cli-welcome');
const boxen = require('boxen')
const pkgJSON = require('./../package.json');

module.exports = (minimal,clear) =>{
    
    
unhandled();



!minimal && welcome({
    title:pkgJSON.name,
    tagLine:`Nice to meet ya!`,
    description:pkgJSON.description,
    version:pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear

})
minimal && console.log((boxen(`AtxPaul`,{padding:1,dimBorder:true})))
}