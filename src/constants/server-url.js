/**
 * This module exports the ServerURL for the current environment based on "__[env]__" variables that becomes set with the webpack DefineTextPlugin.
 * @type {string}
 */

const DEV_URL = 'https://my-dev-server.com';
const STAGING_URL = 'https://my-staging-server.com';
const PROD_URL = 'https://my-production-server.com';

// eslint-disable-next-line no-nested-ternary
const SERVER_URL = __PROD__ ? PROD_URL : (__STAGING__ ? STAGING_URL : DEV_URL);

export default SERVER_URL;
