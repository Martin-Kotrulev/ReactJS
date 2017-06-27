import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ajaxAnimationClass: ''
        };
    }

    componentDidMount() {
        $(document).ajaxStart(() => {
            this.setState({ajaxAnimationClass: 'fadeIn'});
        })

        $(document).ajaxComplete(() => {
            this.setState({ajaxAnimationClass: 'fadeOut'});
        })
    }

    render() {
        return (
            <nav className='nav navbar-default navbar-static-top'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#navbar'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>                        
                    </button>
                    <Link to='/' className='navbar-brand'>
                        <span
                            ref='triangles'
                            className={'triangles-animated' + this.state.ajaxAnimationClass}>
                            <div className='tri tri-invert'/>
                            <div className='tri tri-invert'/>
                            <div className='tri'/>
                            <div className='tri tri-invert'/>
                            <div className='tri tri-invert'/>
                            <div className='tri'/>
                            <div className='tri tri-invert'/>
                            <div className='tri'/>
                            <div className='tri tri-invert'/>
                        </span>
                        MDB
                    </Link>
                </div>
                <div id='navbar' className='collapse navbar-collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/movies/add'>Add Movie</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}