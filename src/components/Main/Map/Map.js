import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import SearchComponent from "./SearchComponent";
import './SearchComponent.css'
import Marker from "./Marker";
import {Markers} from "../../../BACKEND";

class Map extends Component {

    state = {
        center: {
            lat: 46.77,
            lng: 23.59
        },
        zoom: 11,
        markers: Markers
    };


    render() {
        let h = '100vh';
        let w = '100%';
        if (this.props.searchOpen) {
            w = '70%';
        }

        let markers = this.state.markers.map(marker => (
            <Marker lat={marker.lat} lng={marker.lng}/>
        ));

        return (
            <div className={'test'}>
                <div className={'testLine'} style={{height: h, width: w}}>
                    <GoogleMapReact
                        apiKey={"AIzaSyCj_F-2dpfr0GHg-zIWaZeeFU1UYN6Yats"}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}>
                        {markers}
                    </GoogleMapReact>
                </div>
                {this.props.searchOpen &&
                <div className={'testLine1'} style={{height: h, width: '30%'}}>
                    <SearchComponent/>
                </div>}
            </div>
        );
    }
}

export default Map

