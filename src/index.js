import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { ModeSwitch } from 'tobit-chayns_components/react-chayns-modeswitch';
import App from './App';

import SERVER_URL from './constants/server-url';

const tappElement = document.querySelector('.tapp');

/**
 * Renders a component as entry point of your application into the tapp element.
 * @param Component
 */
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        tappElement
    );
};

/**
 * The function waits till the chayns api is successfully loaded and
 * every additional functionality of it is ready to go,
 * renders the App component then
 * and finally initializes the ModeSwitch.
 * @return {Promise.<void>}
 */
async function init() {
    try {
        console.debug('ServerUrl for current environment:', SERVER_URL);

        await chayns.ready;

        render(App);

        // use hot-module-replacement if available
        if (module.hot) {
            module.hot.accept('./App', () => render(App));
        }

        /**
         * Initialize the ModeSwitch. The available modes are 'user mode' (default) and 'chayns® manager'.
         * You can specify content to display according to the current mode (see chayns 'mode' component).
         */
        ModeSwitch.init({
            groups: [{
                id: 1,
                uacIds: [1],
                name: 'chayns® manager'
            }]
        });
    } catch (err) {
        console.warn('no chayns environment found');
    }
}

init();
