import React, { Component } from 'react';
import { connect } from 'react-redux';

class JSONRenderFromAPI extends Component {
    render() {
        return (
            <div>Test {this.props.weather}</div>
        );
    }
}

function mapStateToProps(state) {
	if (typeof state.weather === 'undefined') {
		return { weather: [] };
	}
	return { weather: state.weather };
}

export default connect(mapStateToProps)(JSONRenderFromAPI);
