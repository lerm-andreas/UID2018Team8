import React, {Component} from 'react';
import GoogleMapReact, {GoogleApiWrapper} from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 46.77,
            lng: 23.59
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map
// export default GoogleApiWrapper({
//     apiKey: "AIzaSyCj_F-2dpfr0GHg-zIWaZeeFU1UYN6Yats",
// })(Map);
