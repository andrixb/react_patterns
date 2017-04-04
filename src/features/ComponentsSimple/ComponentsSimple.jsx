import React, { Component } from 'react';

import SimpleTextComponent from '../../components/SimpleTextComponent/SimpleTextComponent';
import SimpleComponentWithProps from '../../components/SimpleComponentWithProps/SimpleComponentWithProps';
import SimpleComponentWithState from '../../components/SimpleComponentWithState/SimpleComponentWithState';
import SimpleComponentWithEventBinding from '../../components/SimpleComponentWithEventBinding/SimpleComponentWithEventBinding';


class ComponentsSimple extends Component {
  render() {
    return (
        <div>
            <SimpleTextComponent />
            <br />
            <SimpleComponentWithProps value={5} />
            <br />
            <SimpleComponentWithState />
            <br />
            <SimpleComponentWithEventBinding page="http://www.google.es">
                Link
            </SimpleComponentWithEventBinding>
            <br />
        </div>
    );
  }
}

export default ComponentsSimple;
