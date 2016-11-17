import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import _       from 'lodash';
import chalk   from 'chalk';
import config  from './config';


/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {

    let count = "Mooooo";

    return {
        // Remember the request id `sample.sampleMethod`.
        // This function MUST return a promise.
        getDroneBranches() {
            // each time this method is invoked, we increment the count by 1
            mozaik.logger.info(chalk.yellow("LOGGING FTW!!!"));
            const req = request.get("https://drone.digital.homeoffice.gov.uk/api/repos/UKHomeOffice/docker-node-hello-world/builds");
            
            return req.promise();
            
            // req.promise().then(function(res) {
            //     let branch = res.body[0].branch;
            //     mozaik.logger.info(chalk.yellow(branch));
            //     {builds: branch};
            // });
            // return Promise.resolve({ builds: "Working again" });
        }
    };
};


export default client;
