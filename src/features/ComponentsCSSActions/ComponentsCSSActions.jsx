import React, { Component } from 'react';

import CheckboxWithLabel from '../../components/CheckboxWithLabel/CheckboxWithLabel';

class ComponentsCSSActions extends Component {
    render() {
        return (
            <div>
                <CheckboxWithLabel labelOn="On" labelOff="Off"/>
            </div>
        );
    }
}

export default ComponentsCSSActions;
