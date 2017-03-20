import React from 'react';
import ReactDOM from 'react-dom';
import {ModeSwitch} from 'tobit-chayns_components/react-chayns-modeswitch';

import App from './App';

/**
 * The following Promise gets resolved, when the chayns API was successfully loaded and
 * every additional functionality of it is ready to go.
 */
async function init() {
    "use strict";
    try{
        await chayns.ready;
        render();
        if (module.hot) module.hot.accept('./App', render);
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
    }catch (err){
        console.warn('no chayns environment found');
    }
}

const render = function(){
    //Initialize the DOM by first rendering the intro and content elements imported above
    ReactDOM.render(
        <App/>,
        document.querySelector('.tapp') //append the rendered elements to the div containing the class 'tapp'
    );
};

init();