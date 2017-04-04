import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions/index';

class JSONParseFromAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div className="weather__container">
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        className="form-control"
                        placeholder="get a forecast by typing city and country code(i.e. Barcelona, es)"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />

                    <span className="input-group-btn">
    					<button type="submit" className="btn btn-secondary">Submit</button>
    				</span>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(JSONParseFromAPI);
