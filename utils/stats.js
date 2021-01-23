const ora = require('ora');
const axios=require('axios');
const handleError=require('cli-handle-error');
const to = require('await-to-js').default;

const spinner=ora({text:''})
const apiURL = `https://api.github.com/users/atxpaul`;

module.exports = async() =>{

    spinner.start(`Fetching GitHub Followers`);
    const [error, res] = await to(axios.get(apiURL));
    handleError(`API CALL FAILED`, error, false, false)
    const ghFollowers = res.data.followers
    spinner.stop();

    console.log(`
GitHub Followers: ${ghFollowers}
    `)
        
    
    
}