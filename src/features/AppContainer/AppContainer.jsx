import React, { Component } from 'react';

import MenuComponent from '../../components/MenuComponent/MenuComponent';

class AppContainer extends Component {
    render() {
        // <div> is always needed when there are more components
        return (
            <div>
                <div className="navigation__container">
                    <nav className="navbar navbar-default">
                        <MenuComponent className="navigation__base" />
                    </nav>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default AppContainer;
