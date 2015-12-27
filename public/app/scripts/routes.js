var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/App');
var Dashboard = require('./components/Dashboard/Dashboard');

module.exports = (
    <Route component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="web-app/index.html" component={Dashboard}/>
    </Route>
);
