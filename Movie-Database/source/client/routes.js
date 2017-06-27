import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import AddMovie from './components/AddMovie';

export default (
    <Route component={App}>
        <Route path='/' component={Home} />
        <Route path='/movies/add' component={AddMovie} />
    </Route>
)
