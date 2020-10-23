const unhandled = require('cli-handle-unhandled');
const welcome = require('cli-welcome');
const pkgJSON = require('./../package.json');

module.exports = () =>{
    
    
unhandled();



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
}