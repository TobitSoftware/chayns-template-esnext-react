/**
 * This module exports the ServerURL for the current environment based on the __ENV__ variables that becomes set with the webpack DefineTextPlugin.
 * @type {string}
 */

const DEV_URL = 'https://my-dev-server.com';
const QA_URL = 'https://my-qa-server.com';
const LIVE_URL = 'https://my-live-server.com';

const SERVER_URL = __LIVE__ ? LIVE_URL : (__QA__ ? QA_URL : DEV_URL);

export default SERVER_URL;