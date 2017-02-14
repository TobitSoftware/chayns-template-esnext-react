import React from 'react';
import ReactDOM from 'react-dom';

import Intro from './components/Intro';
import Content from './components/Content';

import './index.css';


/**
 * This Promise gets resolved, when the chayns API was successfully loaded and
 * every additional functionality of it is ready to go.
 */

chayns.ready.then(function() {
    "use strict";

    ReactDOM.render(
        <div>
            <Intro/>
            <Content/>
        </div>,
        document.querySelector('.tapp')
    );

}).catch(function() {
    console.log('no chayns environment found');
});