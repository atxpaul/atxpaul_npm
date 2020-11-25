const alert = require('atx-alerts');
const log = console.log;

module.exports=(isDebug,cli)=>{
    if (!isDebug){
        return;
    }
    alert({
        type:`info`,
        msg: `DEBUGGING INFO BELOW`,
    })
    log(`input`, cli.input);
    log(`flags`, cli.flags);
    log('\n')
}