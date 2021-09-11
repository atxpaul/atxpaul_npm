#!/usr/bin/env node

//Externals dependencies
const alert = require('atx-alerts');
const {Toggle}=require('enquirer');


//Inner dependencies
const init = require('./utils/init')
const data = require ('./utils/data');
const cli = require('./utils/cli')
const debug = require('./utils/debug');
const stats = require('./utils/stats')



//Stuff
const log = console.log;



const input = cli.input;
const flags = cli.flags;

//IIFE
(async()=>{
    //Init and help
    init(flags.minimal,flags.clear);
    input.includes('help') && cli.showHelp(0);

    //Print the info
    flags.bio && log(data.bio);
    flags.social && log(data.social);

    //Stats
    await stats()
    
    
    alert({
        type:`success`,
        msg: data.msg.msg,
        name: data.msg.name
    })
    
    debug(flags.debug,cli);

})();
