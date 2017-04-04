import React, { Component } from 'react';

/**
 * Simple Component With Event Binding and Class Toggling
 */

const STATUS = {
    NORMAL: 'normal',
    HOVERED: 'hovered'
}

class SimpleComponentWithEventBindig extends Component {
    constructor(props) {
        super(props);

        this.state = { class: STATUS.NORMAL };

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
    }

    _onMouseEnter() {
        this.setState({ class: STATUS.HOVERED })
    }

    _onMouseLeave() {
        this.setState({ class: STATUS.NORMAL })
    }

    render() {
        return (
            <a
              className={this.state.class}
              href={this.props.page || '#'}
              onMouseEnter={this._onMouseEnter}
              onMouseLeave={this._onMouseLeave}>
                {this.props.children}
            </a>
        );
    }
}

export default SimpleComponentWithEventBindig;
