import React, {Component} from 'react';

class MenuItem extends Component {
    render() {
        return (
            <li>
                <a href={this.props.page}>{this.props.name}</a>
            </li>
        );
    }
}

export default MenuItem;
