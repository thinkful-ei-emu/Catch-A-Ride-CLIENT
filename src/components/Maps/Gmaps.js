import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import RideContext from '../../context/RideContext';
import config from '../../config';
import './gmaps.css';


export class Gmaps extends Component {
  static contextType = RideContext;

  render() {
    const mapStyles = {
      height: '400px',
      width: '100%',
    }

    return (
      <div>
        <Map google={this.props.google} zoom={5} style={mapStyles} initialCenter={{ lat: 37.0902, lng: -95.7129 }}>
          <Marker position={this.context.destinationC} />
          <Marker position={this.context.startingC} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.GMAPS_API_KEY
})(Gmaps);