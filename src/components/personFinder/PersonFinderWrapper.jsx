import React from 'react';
import PropTypes from 'prop-types';

import { PersonFinder } from 'chayns-components/lib';

/**
 *
 * @param addUser
 * @constructor
 *
 * the Same personFinder as in EcamScript, but already written as a Reactcomponent
 * inside are Arguments you give to the Component as Parameters and Callbacks
 */
const PersonFinderWrapper = ({ addUser }) => (
    <PersonFinder
        placeholder="Search for users"
        /**
         * onChange is a person finder specified event provided via the chayns api
         * it returns the selected user to the addUser function
         */
        onChange={(res) => {
            // this is a Callback which is Called in PersonFinder as this.props.onChange()
            console.log('personFinder', res);
            res.node.value = '';
            addUser(res.user);
        }}
        style={{
            width: '100%'
        }}
    />
);

/**
 *
 * @type {{addUser: *}}
 */
PersonFinderWrapper.propTypes = {
    addUser: PropTypes.func.isRequired
};

export default PersonFinderWrapper;
