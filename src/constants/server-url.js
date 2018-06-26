/**
 * This module exports the ServerURL for the current environment based on the process.env.NODE_ENV variable that becomes set with the webpack DefineTextPlugin.
 * @type {string}
 */

const DEV_URL = 'https://my-dev-server.com';
const STAGING_URL = 'https://my-staging-server.com';
const LIVE_URL = 'https://my-live-server.com';

const SERVER_URL = process.env.NODE_ENV === 'production' ? LIVE_URL : (process.env.NODE_ENV === 'staging' ? STAGING_URL : DEV_URL);

export default SERVER_URL;
