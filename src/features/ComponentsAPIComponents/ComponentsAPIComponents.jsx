import React, { Component } from 'react';

import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';
import JSONRequestFromAPI from '../../components/JSONRequestFromAPI/JSONRequestFromAPI';
import JSONRenderFromAPI from '../../components/JSONRenderFromAPI/JSONRenderFromAPI';

class ComponentsAPIComponents extends Component {
  render() {
    return (
        <div>
            <GoogleMaps />
            <br />
            <JSONRequestFromAPI />
            <br />
            <JSONRenderFromAPI />
        </div>
    );
  }
}

export default ComponentsAPIComponents;
