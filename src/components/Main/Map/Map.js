import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import SearchComponent from "./SearchComponent";
import './SearchComponent.css'
import Marker from "./Marker";
import {Markers} from "../../../BACKEND";

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 46.77,
                lng: 23.59
            },
            zoom: 11,
            markers: Markers
        };
        this.addVote = this.addVote.bind(this);
        this.handleSendFeedback = this.handleSendFeedback.bind(this);
    }

    addVote = (index) => {
        let currMarkers = this.state.markers;
        if (!currMarkers[index].beenVoted)
            currMarkers[index].votes += 1;

        else
            currMarkers[index].votes -= 1;
        currMarkers[index].beenVoted = !currMarkers[index].beenVoted;

        this.setState({markers: currMarkers})
    };

    handleSendFeedback = (index, comment) => {
        let currMarkers = this.state.markers;
        currMarkers[index].comments.push(comment);
        this.setState({markers: currMarkers});
        alert('Added comment ' + comment + 'for index :' + index)
    };

    render() {
        let h = '100vh';
        let w = '100%';
        if (this.props.searchOpen) {
            w = '70%';
        }

        let markers = this.state.markers.map((marker, index) => (
            <Marker lat={marker.lat} lng={marker.lng} marker={marker}
                    addVote={() => this.addVote(index)}
                    handleSendFeedback={(comment) => this.handleSendFeedback(index, comment)}/>
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

