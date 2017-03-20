import React from 'react';

import PersonFinder from 'tobit-chayns_components/react-chayns-personfinder';

const PersonFinderWrapper = ({addUser})=>{ //use the underscore to differentiate this class from the imported module 'PersonFinder'

    return(
        <PersonFinder
            placeholder="Search for users"
            /**
            * onChange is a person finder specified event provided via the chayns api
            * it returns the selected user to the addUser function
            */
            onChange={addUser}
        />
    );

};

PersonFinderWrapper.propTypes = {
    addUser: React.PropTypes.func
};

export default PersonFinderWrapper;