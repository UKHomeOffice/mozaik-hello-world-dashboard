import React, { Component, PropTypes } from 'react';
import reactMixin                      from 'react-mixin';
import { ListenerMixin }               from 'reflux';
import _                               from 'lodash';
import Mozaik                          from 'mozaik/browser';


class DroneBranches extends Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };
    }

    getApiRequest() {
        return {
            id:     `drone.getDroneBranches`
        };
    }

    onApiData(data) {
        console.log(data)
        this.setState({
            count: data.count
        });
    }

    render() {
        const { count } = this.state;

        return (
          <div className="widget__body">
              <h1>Yay this is Tim's widget now!!</h1>
              <p>{count}</p>
          </div>
        );
    }
}

reactMixin(DroneBranches.prototype, ListenerMixin);
reactMixin(DroneBranches.prototype, Mozaik.Mixin.ApiConsumer);

export default DroneBranches;
