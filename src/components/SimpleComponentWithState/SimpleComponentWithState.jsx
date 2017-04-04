import React, {Component} from 'react';


class SimpleComponentWithState extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return(
            <div>
                <input
                    value={this.state.value}
                    onChange={(event) => this.onInputChange(event.target.value)}/>
                <p>The value entered is {this.state.term}</p>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
    }
}

export default SimpleComponentWithState;
