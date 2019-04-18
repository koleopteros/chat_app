import PropTypes from 'prop-types';
import classnames from 'classnames';

import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { loginUser } from '../../actions/authActions';
import { stat } from 'fs';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            password:'',
            errors:{}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const user = {
            name: this.state.name,
            password: this.state.password,
        };
        console.log(user);
        this.props.loginUser(user);
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
                            <h4><b>Login</b></h4>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='input-field col s12'>
                                <input onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id='name'
                                    type='text'
                                    className={classnames('', {invalid: errors.loginFailed})}
                                    />
                                <label htmlFor='name'>Name</label>
                                <span className='red-text'>{errors.loginFailed}</span>
                            </div>
                            <div className='input-field col s12'>
                                <input onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames('', {invalid: errors.loginFailed})}
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
                                    }}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Login);