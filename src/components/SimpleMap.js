import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const BigSquare = () => {
    return (

        <div style={{ width: '100px', height: '100px', background: 'red'}}>
        <p>BIG</p>
        </div>
    )
}

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33 
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDLcXJX9mkKhUOTwCrzdUfOjbGVKnisc5M'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <BigSquare
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;