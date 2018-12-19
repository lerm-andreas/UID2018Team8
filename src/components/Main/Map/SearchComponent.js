import React, {Component} from "react";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import DatePicker from 'material-ui/DatePicker';

import './SearchComponent.css';


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
        this.setState({ [event.target.name]: event.target.value });
    };

    handleDate = (event, date) => {
        this.setState({date: date})
    };

    render() {
        return (
            <div>
                <Select className={'search-sel'} value={this.state.area} onChange={this.handleChange} displayEmpty
                        inputProps={{
                            name: 'area',
                            id: 'search-area',
                        }}>
                    <MenuItem value="">
                        <em>Area</em>
                    </MenuItem>
                    <MenuItem value={'1'}>Area 1</MenuItem>
                    <MenuItem value={'2'}>Area 2</MenuItem>
                    <MenuItem value={'3'}>Area 3</MenuItem>
                </Select>
                <br/>
                <Select className={'search-sel'} value={this.state.category} onChange={this.handleChange} displayEmpty
                        inputProps={{
                            name: 'category',
                            id: 'search-category',
                        }}>
                    <MenuItem value="">
                        <em>Category</em>
                    </MenuItem>
                    <MenuItem value={'A'}>Category A</MenuItem>
                    <MenuItem value={'B'}>Category B</MenuItem>
                    <MenuItem value={'C'}>Category C</MenuItem>
                </Select>
                <br/>
                <Select className={'search-sel'} value={this.state.status} onChange={this.handleChange} displayEmpty
                        inputProps={{
                            name: 'status',
                            id: 'search-status',
                        }}>
                    <MenuItem value="">
                        <em>Status</em>
                    </MenuItem>
                    <MenuItem value={'Open'}>Open</MenuItem>
                    <MenuItem value={'InProgress'}>In Progress</MenuItem>
                    <MenuItem value={'Closed'}>Closed</MenuItem>
                </Select>
                <br/>
                <DatePicker onChange={this.handleDate} value ={this.state.date} hintText={'Pick a date'}/>
            </div>
        )
    }
};

export default SearchComponent;