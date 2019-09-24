import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from 'react-geocode';
import RideContext from '../../context/RideContext';
import config from '../../config';
import './gmaps.css';

export class Gmaps extends Component {
    state = {
      starting: { lat: null, lng: null },
      destination: { lat: null, lng: null },
    }

    static contextType = RideContext;

    componentDidMount() {
      this.getGeo();
    }

    getGeo() {
      let destination = this.context.ride.destination;
      let starting = this.context.ride.starting;
      Geocode.setApiKey(config.GEO_API_KEY);
      Geocode.fromAddress(destination).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          // console.log(lat, lng);
          this.setState({ destination: { lat, lng } });
          // console.log(this.state)
        },
        error => {
          console.error(error);
        }
      );
      Geocode.fromAddress(starting).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          // console.log(lat, lng);
          this.setState({ starting: { lat, lng } });
          // console.log(this.state)
        },
        error => {
          console.error(error);
        }
      );
    }

    render() {
      const mapStyles = {
        height: '400px',
        width: '100%',
      };
      console.log(this.state);
      return (
        <>
          <Map google={this.props.google} zoom={5} style={mapStyles} initialCenter={{ lat: 37.0902, lng: -95.7129 }}>
            <Marker position={this.state.destination} />
            <Marker position={this.state.starting} />
          </Map>
        </>
      );
    }
}

export default GoogleApiWrapper({
  apiKey: config.GMAPS_API_KEY
})(Gmaps);