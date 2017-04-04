import React, { Component } from 'react';
import MenuItem from './components/MenuItem/MenuItem';

export const menuItems = [
    {
        name: "Simple Components",
        page: "/components/simple"
    },
    {
        name: "CSS Action Components",
        page: "/components/css"
    },
    {
        name: "API Components",
        page: "/components/api"
    },
];

class MenuComponent extends Component {
    _renderItems() {
        return menuItems.map(item => {
            return (
                <MenuItem
                    name = {item.name}
                    page = {item.page}
                    key = {item.page} />
            );
        });
    }

    render() {
        return (
            <ul className={this.props.className}>
                { this._renderItems() }
            </ul>
        );
    }
}

export default MenuComponent;
