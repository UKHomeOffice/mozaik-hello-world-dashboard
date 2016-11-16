import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import _       from 'lodash';
import chalk   from 'chalk';
import config  from './config';


/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {

    let count = 0;

    return {
        // Remember the request id `sample.sampleMethod`.
        // This function MUST return a promise.
        getDroneBranches() {
            // each time this method is invoked, we increment the count by 1
            count += 1;

            return Promise.resolve({ count });
        }
    };
};


export default client;
