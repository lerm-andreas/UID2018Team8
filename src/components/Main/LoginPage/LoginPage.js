import React, {Component} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button"
import LoginHeader from "../../Header/LoginHeader";
import {accounts, Markers} from "../../../BACKEND";

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.username === accounts.userAccount.username && this.state.password === accounts.userAccount.password) {
            this.props.history.push('/home');
            localStorage.setItem('coins', accounts.userAccount.coins);
            localStorage.setItem('role', accounts.userAccount.role);
            const markers = Markers;
            localStorage.setObject('markers', markers[0])
        } else {
            //TODO display some wrong input error
        }

    };

    render() {
        return (
            <div>
                <LoginHeader/>
                <form onSubmit={this.handleSubmit}>
                    <TextField name={'username'} label={'Username'} type={'text'} required={true}
                               onChange={this.handleChange}/><br/>
                    <TextField name={'password'} label={'Password'} type={'password'}
                               required={true}
                               onChange={this.handleChange}/><br/>
                    <Button type={'submit'} variant='condensed'>Submit</Button>
                </form>
            </div>
        )
    }
}

export default LoginPage;