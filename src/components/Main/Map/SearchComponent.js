import React, {Component} from "react";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import DatePicker from 'material-ui/DatePicker';
import Drawer from "@material-ui/core/Drawer/Drawer";
import {Categories, cityAreas, Status} from "../../../BACKEND";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

const styles = {
    title: {
        marginTop: '3vw',
    },
    search: {
        width: '30vw',
        maxWidth: '30vw',
        overflow: 'hidden',
        height: '100%',
    },
    btn: {
        marginRight: '5vw',
    },
    searchSel: {
        marginTop: '4vw',
        minWidth: '20vw',
    },
    createTxtarea: {
        marginTop: '2vw',
        width: '20vw',
    },
    uploader: {
        width: '20vw',
        minHeight: '10px',
        overflow: 'left',
        marginLeft: '5vw',
        display: 'table-cell',
    }

};

class SearchComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            area: '',
            category: '',
            status: '',
            date:'',
        };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => this.props.updateDisplayFilter(this.state));
    };

    // handleDate = (event, date) => {
    //     this.setState({date: date});
    // };

    resetState = () => {
        this.setState({
            area: '',
            category: '',
            status: '',
            date:'',
        }, () =>  this.props.updateDisplayFilter(this.state));
    };

    render() {
        let categorySelector =[]; let statusSelector = []; let areaSelector = [];
        Object.entries(Categories).forEach(([key,val]) => {
            categorySelector.push(<MenuItem value={val}>{val}</MenuItem>)
        });
        Object.entries(Status).forEach(([key,val]) => {
            statusSelector.push(<MenuItem value={val}>{val}</MenuItem>)
        });
        Object.entries(cityAreas).forEach(([key,val]) => {
            areaSelector.push(<MenuItem value={val}>{val}</MenuItem>)
        });
        const {classes} = this.props;
        return (
            <Drawer anchor="right" open={this.props.show} onClose={this.props.close} variant={"persistent"}>
                <div className={classes.search}>
                    <Typography className={classes.title} variant="h4">Search issues:</Typography>
                    <Select className={classes.searchSel} value={this.state.area} onChange={this.handleChange} displayEmpty
                            inputProps={{
                                name: 'area',
                                id: 'search-area',
                            }}>
                        <MenuItem value=''>Area</MenuItem>
                        {cityAreas.map( (obj) =>
                            <MenuItem value={obj.coords}>{obj.name}</MenuItem>
                        )}
                    </Select>
                    <br/>
                    <Select className={classes.searchSel} value={this.state.category} onChange={this.handleChange} displayEmpty
                            inputProps={{
                                name: 'category',
                                id: 'search-category',
                            }}>
                        <MenuItem value="">Category</MenuItem>
                        {categorySelector}
                    </Select>
                    <br/>
                    <Select className={classes.searchSel} value={this.state.status} onChange={this.handleChange} displayEmpty
                            inputProps={{
                                name: 'status',
                                id: 'search-status',
                            }}>
                        <MenuItem value=""><em>Status</em></MenuItem>
                        {statusSelector}
                    </Select>
                    <br/>
                    <Button onClick={this.resetState}>Clear Filters</Button>
                    {/*<DatePicker onChange={this.handleDate} value ={this.state.date} hintText={'Pick a date'}/>*/}
                </div>
                <Button  onClick={this.props.close}>Cancel</Button>
            </Drawer>
        )
    }
};

export default withStyles(styles)(SearchComponent);