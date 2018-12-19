import React, {Component} from 'react';
import GoogleMapReact, {GoogleApiWrapper} from 'google-map-react';
import SearchComponent from "./SearchComponent";
import './SearchComponent.css'

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
        let h = '100vh';
        let w = '100%';
        if (this.props.searchOpen) {
            w = '70%';
        }
        return (
            <div className={'test'}>
                <div className={'testLine'} style={{height: h, width: w}}>
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
                {this.props.searchOpen &&
                    <div className={'testLine1'} style={{height: h, width: '30%'}}>
                        <SearchComponent/>
                    </div>}
            </div>
            );
        }
}

export default Map
// export default GoogleApiWrapper({
//     apiKey: "AIzaSyCj_F-2dpfr0GHg-zIWaZeeFU1UYN6Yats",
// })(Map);
