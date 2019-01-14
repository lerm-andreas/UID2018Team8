import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './SearchComponent.css'
import Marker from "./Marker";
import {Markers} from "../../../BACKEND";
import Drawer from '@material-ui/core/Drawer';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    search: {
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
        };
        this.addVote = this.addVote.bind(this);
        this.handleSendComment = this.handleSendComment.bind(this);
        this.handleAdminChanges = this.handleAdminChanges.bind(this);
        this.openIssueDialog = this.openIssueDialog.bind(this);
        this.openFeedbackDialog = this.openFeedbackDialog.bind(this);
        this.closeFeedbackDialog = this.closeFeedbackDialog.bind(this);
        this.closeIssueDialog = this.closeIssueDialog.bind(this);
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
                    showIssueDialog={this.state.showIssueDialog}/>
        ));

        return (
            <div className={'test'}>
                <div className={'testLine'} style={{height: h, width: w}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: 'AIzaSyBQ4D87IzLHgZ1DolJTfKDr_YdWabJKfH4',
                            v: '3.31'
                        }}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                        v={'3.31'}>
                        {markers}
                    </GoogleMapReact>
                </div>
                {/*{this.props.searchOpen &&*/}
                {/*<div className={'testLine1'} style={{height: h, width: '30%'}}>*/}
                {/*<SearchComponent/>*/}
                {/*</div>}*/}
                <Drawer anchor="right" open={this.props.searchOpen}
                        onClose={this.props.toggleSearch}>
                    <div
                        className={classes.search}
                        tabIndex={0}
                        role="button"
                        onClick={this.props.toggleSearch}>
                        <p>ceva</p>
                        <p>altceva</p>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(Map);

