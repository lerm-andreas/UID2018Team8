import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import SearchComponent from "./SearchComponent";
import './SearchComponent.css'
import Marker from "./Marker";

class Map extends Component {
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            position: {
                lat: 46.77,
                lng: 23.59
            },
            center: {
                lat: 46.77,
                lng: 23.59
            },
            zoom: 11,
        }
    }


    render() {
        let h = '100vh';
        let w = '100%';
        if (this.props.searchOpen) {
            w = '70%';
        }
        return (
            <div className={'test'}>
                <div className={'testLine'} style={{height: h, width: w}}>
                    <GoogleMapReact
                        apiKey={"AIzaSyCj_F-2dpfr0GHg-zIWaZeeFU1UYN6Yats"}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}

                    >
                        <Marker {...this.state.position} text={'A'}/>
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

