var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./routes');
var createHistory = require('history').createHistory;

ReactDom.render(
    <Router history={createHistory()}>{routes}</Router>,
    document.getElementById('app')
);

