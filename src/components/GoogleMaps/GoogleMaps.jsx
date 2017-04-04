import React, { Component } from 'react';

/**
 * GoogleMaps
 */
export class GoogleMaps extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
          center: {
              lat: -34.397,
              lng: 150.644
          },
          zoom: 8
        });
    }

    render() {
        return <div className="map__container" ref="map" />;
    }
}

export default GoogleMaps;
