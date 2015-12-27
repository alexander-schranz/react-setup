var React = require('react');
var Navigation = require('./Navigation');
var ReactIntl = require('react-intl');
var IntlProvider = ReactIntl.IntlProvider;

console.log(messages);

var App = React.createClass({
    render: function() {
        return (
            <IntlProvider locale="en" messages={messages}>
                <div>
                    <Navigation/>
                    {this.props.children}
                </div>
            </IntlProvider>
        );
    }
});

module.exports = App;
