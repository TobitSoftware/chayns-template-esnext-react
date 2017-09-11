import { LIVE, QA } from './environment';

/**
 * This module exports the ServerURL for the current environment based on the process.env.NODE_ENV variable that becomes set with the webpack DefineTextPlugin.
 * @type {string}
 */

const DEV_URL = 'https://my-dev-server.com';
const QA_URL = 'https://my-qa-server.com';
const LIVE_URL = 'https://my-live-server.com';

const SERVER_URL = LIVE ? LIVE_URL : (QA ? QA_URL : DEV_URL);

export default SERVER_URL;
