import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            password:'',
            errors:{}
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            password: this.state.password,
        };
        console.log(newUser);
    };
    render() {
        const{errors} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link to='/' className='btn-flat waves-effect'>
                        <i className='material-icons left'>keyboard_backspace</i>Back to Home
                        </Link>
                        <div className='col s12' style={{ paddingLeft:'11px'}}>
                            <h4><b>Registration</b></h4>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='input-field col s12'>
                                <input onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id='name'
                                    type='text'    
                                />
                                <label htmlFor='name'>Name</label>
                            </div>
                            <div className='input-field col s12'>
                                <input onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className='col s12' style={{paddingLeft:'11 px'}}>
                                <button type='submit'
                                    className='btn btn-large waves-effect waves-light hoverable blue accent-3'
                                    style={{
                                        width:'150px',
                                        borderRadius:'3px',
                                        letterSpacing:'2px',
                                        marginTop:'1rem'
                                    }}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;