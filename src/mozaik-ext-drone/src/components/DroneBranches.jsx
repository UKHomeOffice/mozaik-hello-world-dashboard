import React, { Component, PropTypes } from 'react';
import reactMixin                      from 'react-mixin';
import { ListenerMixin }               from 'reflux';
import _                               from 'lodash';
import Mozaik                          from 'mozaik/browser';
import util                            from 'util';


class DroneBranches extends Component {
    constructor(props) {
        super(props);

        this.state = { count: "Data loading..." };
    }

    getApiRequest() {
        return {
            id:     `drone.getDroneBranches`
        };
    }

    onApiData(data) {
        const json = JSON.parse(data.text);
        const groupedByBranch = _.groupBy(json, item => item.branch);
        const latestBuildsPerBranch = _.mapValues(groupedByBranch, group => _.maxBy(group, g => g.started_at));


        const html = _.map(latestBuildsPerBranch, b => (
        <div>
            <h1>{b.branch}</h1>
            <h2>{b.status}</h2>
        </div>
    ));

        this.setState({
            count: html
        });
    }

    render() {
        const { count } = this.state;

        return (
          <div className="widget__body">
              {count}
          </div>
        );
    }
}

reactMixin(DroneBranches.prototype, ListenerMixin);
reactMixin(DroneBranches.prototype, Mozaik.Mixin.ApiConsumer);

export default DroneBranches;
