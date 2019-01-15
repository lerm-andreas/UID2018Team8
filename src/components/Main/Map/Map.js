import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import SearchComponent from "./SearchComponent";
import Marker from "./Marker";
import {Markers, stringToCategory, stringToStatus} from "../../../BACKEND";
import withStyles from "@material-ui/core/styles/withStyles";

import EmptyMarker from "./EmptyMarker";
import CreateComponent from "./CreateComponent";
const styles = {
    search: {
        width: '30vw',
    },
    create: {
        width: '30vw',
    }
};

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
            showIssueDialog: false,
            showFeedbackDialog: false,
            showAuthDialog:false,

            markersCopy: Markers,
            showCreateDrawer: false,
            showEmptyMarker: false,
        };
        this.addVote = this.addVote.bind(this);
        this.handleSendComment = this.handleSendComment.bind(this);
        this.handleAdminChanges = this.handleAdminChanges.bind(this);
        this.openIssueDialog = this.openIssueDialog.bind(this);
        this.openFeedbackDialog = this.openFeedbackDialog.bind(this);
        this.closeFeedbackDialog = this.closeFeedbackDialog.bind(this);
        this.closeIssueDialog = this.closeIssueDialog.bind(this);
        this.mapClick = this.mapClick.bind(this);
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
        this.setState({markers: currMarkers, showFeedbackDialog: false});
    };

    openFeedbackDialog = () => {
        this.setState({showFeedbackDialog: true})
    };

    closeFeedbackDialog = () => {
        this.setState({showFeedbackDialog: false})

    };

    openIssueDialog = () => {
        this.setState({showIssueDialog: true})
    };

    closeIssueDialog = () => {
        this.setState({showIssueDialog: false})
    };

    handleAdminChanges = (index, changes) => {
        let currMarkers = this.state.markers;
        Object.keys(changes).forEach((key) => (
            currMarkers[index][key] = changes[key]
        ));
        this.setState({markers: currMarkers, showIssueDialog: false});
    };

    handleAdminChanges2 = (index, changes) => {
        this.setState({showAuthDialog: false});
    };

    closeAuthDialog =() =>{
        this.setState({showAuthDialog: false});
    }

    openAuthDialog = () =>{
        this.setState({showAuthDialog: true});

    }

    mapClick = ({x,y,lat,lng,event}) => {
        console.log(lat,lng);
        if (lat > 46.80685273728968 || lat < 46.72934723969379 || lng < 23.517955946378038 || lng > 23.69744916566617) {
           alert('out of bounds');
        } else if (this.props.searchOpen === false) { // sa nu fie ambele active simultan
            const newlng = lng + 0.0021; //because of the drawer opening
            this.setState({
                center: {lat: lat, lng: newlng},
                zoom: 17,
                showEmptyMarker: true,
                showCreateDrawer: true
            });
        }
    };

    mapChange = ({center, zoom, bounds, marginBounds}) => {
        this.setState({zoom: zoom})
    };

    closeCreateDrawer = () => {
        this.setState({showCreateDrawer: false,
                       showEmptyMarker: false,
                       zoom: 15})
    };

    createIssue = (marker) => {
        marker.lat = this.state.center.lat;
        marker.lng = this.state.center.lng - 0.0021; //crede si nu cerceta
        localStorage.setItem('coins', parseInt(localStorage.getItem('coins'),10)+5);
        this.state.markers.push(marker);
    };

    updateDisplayFilter = (displayFilter) => {
        if (displayFilter.status === '' && displayFilter.category === '') {
            console.log(this.state.markers);
            this.setState({markers: this.state.markersCopy}, () => console.log('setted' + this.state.markers));
        }
      //copy the unfiltered list
        if ((displayFilter.status !== '' && displayFilter.category === '') || (displayFilter.status === '' && displayFilter.category !== ''))
            this.setState({markersCopy: this.state.markers});


      if (displayFilter.area !== '') {
          this.setState({center: {lat: displayFilter.area.lat, lng: displayFilter.area.lng }})
      }
      let filteredMarkers = [];
      if (displayFilter.category !== '' && displayFilter.status === '') {
          const filterCategory = stringToCategory(displayFilter.category);
          this.state.markers.forEach((marker) => {
              if (marker.category === filterCategory) {
                  filteredMarkers.push(marker);
              }
          });
          this.setState({markers: filteredMarkers})
      }
      if (displayFilter.status !== '' && displayFilter.category === '') {
          const filterStatus = stringToStatus(displayFilter.status);
          this.state.markers.forEach((marker) => {
              if (marker.status === filterStatus) {
                  filteredMarkers.push(marker);
              }
          });
          this.setState({markers: filteredMarkers})
      }
        if (displayFilter.status !== '' && displayFilter.category !== '') {
            const filterCategory = stringToCategory(displayFilter.category);
            const filterStatus = stringToStatus(displayFilter.status);
            this.state.markers.forEach((marker) => {
                if (marker.status === filterStatus && marker.category === filterCategory ) {
                    filteredMarkers.push(marker);
                }
            });
            this.setState({markers: filteredMarkers})
        }
    };

    render() {
        let h = '100vh';
        let w = '100%';
        // if (this.props.searchOpen) {
        //     w = '70%';
        // }
        const {classes} = this.props;

        let markers = this.state.markers.map((marker, index) => (
            <Marker lat={marker.lat} lng={marker.lng} marker={marker}
                    addVote={() => this.addVote(index)}
                    handleSendComment={(comment) => this.handleSendComment(index, comment)}
                    handleAdminChanges={(changes) => this.handleAdminChanges(index, changes)}
                    openFeedbackDialog={this.openFeedbackDialog}
                    openIssueDialog={this.openIssueDialog}
                    closeFeedbackDialog={this.closeFeedbackDialog}
                    closeIssueDialog={this.closeIssueDialog}

                    showFeedbackDialog={this.state.showFeedbackDialog}
                    showIssueDialog={this.state.showIssueDialog}

                    handleAdminChanges2={this.handleAdminChanges2}
                    closeAuthDialog={this.closeAuthDialog}
                    openAuthDialog={this.openAuthDialog}
                    showAuthDialog={this.state.showAuthDialog}/>
        ));

        return (
            <div className={'test'}>
                <div className={'testLine'} style={{height: h, width: w}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: 'AIzaSyBQ4D87IzLHgZ1DolJTfKDr_YdWabJKfH4',
                            v: '3.31'
                        }}
                        center={this.state.center}
                        zoom={this.state.zoom}
                        onClick={this.mapClick} onChange={this.mapChange}
                        v={'3.31'}>
                        {markers}
                        {this.state.showEmptyMarker &&
                            <EmptyMarker lat={this.state.center.lat + 0.0004} //pic err
                                         lng={this.state.center.lng - 0.0003 - 0.0021}/> //pic err + drawer opening
                        }
                    </GoogleMapReact>
                </div>

                {/*Search Drawer*/}
               <SearchComponent show={this.props.searchOpen} close={this.props.toggleSearch}
                                updateDisplayFilter={this.updateDisplayFilter}/>

                {/*Create Drawer*/}
                <CreateComponent show={this.state.showCreateDrawer} close={this.closeCreateDrawer}
                                 submit={this.createIssue}/>
            </div>
        );
    }
}

export default withStyles(styles)(Map);

