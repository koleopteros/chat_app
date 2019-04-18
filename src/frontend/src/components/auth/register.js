import PropTypes from 'prop-types';
import classnames from 'classnames';

import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { registerUser } from '../../actions/authActions';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            password:'',
            errors:{}
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors:nextProps.errors
            });
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
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const{errors} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
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
                                    className={classnames('',{ invalid:errors.name})}
                                />
                                <label htmlFor='name'>Name</label>
                                <span className='red-text'>{errors.name}</span>
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
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth:state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));