var React = require('react');
var Link = require('react-router').Link;

var Navigation = React.createClass({
    render: function() {
        return (
            <nav className="app-navigation">
                <ul>
                    <li className="app-navigation-item">
                        <Link to="/" className="app-navigation-item-link" activeClassName="active">
                            {{id: 'dashboard'}}
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
});

module.exports = Navigation;
