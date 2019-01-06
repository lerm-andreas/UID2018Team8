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
            zoom: 15,
            markers: Markers,
            role: localStorage.getItem('role'),
            showDialog: true
        };
        this.addVote = this.addVote.bind(this);
        this.handleSendComment = this.handleSendComment.bind(this);
        this.handleAdminChanges = this.handleAdminChanges.bind(this);
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

    handleSendComment = (index, comment) => {
        let currMarkers = this.state.markers;
        currMarkers[index].userComments.push(comment);
        this.setState({markers: currMarkers, showDialog: false});
    };

    handleAdminChanges = (index, changes) => {
        let currMarkers = this.state.markers;
        Object.keys(changes).forEach((key) => (
            currMarkers[index][key] = changes[key]
        ));
        this.setState({markers: currMarkers, showDialog: false});
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
                    handleSendComment={(comment) => this.handleSendComment(index, comment)}
                    handleAdminChanges={(changes) => this.handleAdminChanges(index, changes)}
                    showDialog={this.state.showDialog}/>
        ));

        return (
            <div className={'test'}>
                <div className={'testLine'} style={{height: h, width: w}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: 'AIzaSyCj_F-2dpfr0GHg-zIWaZeeFU1UYN6Yats',
                            v: '3.31'
                        }}
                        // apiKey={"AIzaSyCj_F-2dpfr0GHg-zIWaZeeFU1UYN6Yats"}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                        v={'3.31'}>
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

