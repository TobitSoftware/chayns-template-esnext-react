import React from 'react';
import ReactDOM from 'react-dom';
import {ModeSwitch} from 'tobit-chayns_components/react-chayns-modeswitch';

import Intro from './components/Intro';
import Content from './components/Content';

/**
 * The following Promise gets resolved, when the chayns API was successfully loaded and
 * every additional functionality of it is ready to go.
 */
chayns.ready.then(function() {
    "use strict";

    //Initialize the DOM by first rendering the intro and content elements imported above
    ReactDOM.render(
        <div>
            <Intro/>
            <Content/>
        </div>,
        document.querySelector('.tapp') //append the rendered elements to the div containing the class 'tapp'
    );

    /**
     * Initialize the ModeSwitch. The available modes are 'user mode' (default) and 'chayns® manager'
     * You can specify content to display according to the current mode (see chayns 'mode' component
     */
    ModeSwitch.init({
        groups: [{
            id: 1,
            uacIds: [1],
            name: 'chayns® manager'
        }]
    });

}).catch(function() {
    console.log('no chayns environment found');
});