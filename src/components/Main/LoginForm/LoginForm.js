import React, {Component} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";


class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name] : value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.username === 'admin' && this.state.password === 'password') {
            this.props.history.push('/home');
        } else {
            // display some wrong input error
        }

    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField name={'username'} label={'Username'} type={'text'} required={true}
                               onChange={this.handleChange}/><br/>
                    <TextField name={'password'} label={'Password'} type={'password'} required={true}
                               onChange={this.handleChange}/><br/>
                    <Button type={'submit'} variant={'condensed'}>Submit</Button>
                </form>
            </div>
        )
    }
}

export default LoginForm;