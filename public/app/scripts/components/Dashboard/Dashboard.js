var React = require('react');

var Dashboard = React.createClass({

    getInitialState: function () {
        return {
            // set stores as state
        }
    },

    componentDidMount: function () {
        // load stores
    },

    componentWillMount: function () {
        // listen stores
    },

    componentWillUnmount: function() {
        // unlisten stores
    },

    render: function() {
        return (
            <div>
                <h2>
                    {{id: 'dashboard'}}
                </h2>
            </div>
        );
    }
});

module.exports = Dashboard;