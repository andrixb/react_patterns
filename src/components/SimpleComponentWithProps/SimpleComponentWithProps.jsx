import React, { Component } from 'react';

class SimpleComponentWithProps extends Component {
    render() {
        return (
            <div> The value passed is {this.props.value} </div>
        );
    }
}

export default SimpleComponentWithProps;
