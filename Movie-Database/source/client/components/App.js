import React from 'react';

import Navbar from './Navbar'

export default class App extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Navbar history={this.props.history}></Navbar>
                { this.props.children }
            </div>
        );
    }
}