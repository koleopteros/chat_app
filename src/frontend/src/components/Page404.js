import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Page404 extends Component {
    render() {
        return(
            <div className='center-align'>
                <h2>Error 404</h2><h3>Page not found</h3>
                <br/>
                <Link to='/' className='btn-flat waves-effect'>
                    <i className='material-icons left'>keyboard_backspace</i>Back to Home
                </Link>
            </div>
        )
    }
}

export default Page404;