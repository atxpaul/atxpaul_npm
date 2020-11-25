#!/usr/bin/env node

//Externals dependencies
const alert = require('atx-alerts');

//Inner dependencies
const init = require('./utils/init')
const data = require ('./utils/data');
const cli = require('./utils/cli')
const debug = require('./utils/debug');



//Stuff
const log = console.log;



const input = cli.input;
const flags = cli.flags;

//IIFE
(async()=>{
    init();

    input.includes('help') && cli.showHelp(0);

    log(data.bio);

    if (flags.social){
        log(data.social);
    }
    
    
    
    alert({
        type:`success`,
        msg: data.msg.msg,
        name: data.msg.name
    })
    
    debug(flags.debug,cli);

})();
