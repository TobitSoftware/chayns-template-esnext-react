import React from 'react';
import PropTypes from 'prop-types';

import { PersonFinder } from 'chayns-components';

const PersonFinderWrapper = ({ addUser }) => (
    <PersonFinder
        placeholder="Search for users"
        /**
         * onChange is a person finder specified event provided via the chayns api
         * it returns the selected user to the addUser function
         */
        onChange={(res) => {
            res.node.value = '';
            addUser(res.user);
        }}
    />
);

PersonFinderWrapper.propTypes = {
    addUser: PropTypes.func.isRequired
};

export default PersonFinderWrapper;