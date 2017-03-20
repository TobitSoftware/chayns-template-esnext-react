import React from 'react';

import {Mode} from 'tobit-chayns_components/react-chayns-modeswitch';
import PersonFinder from 'tobit-chayns_components/react-chayns-personfinder';

export default class _PersonFinder extends React.Component { //use the underscore to differentiate this class from the imported module 'PersonFinder'

    constructor() {
        super();
    }

    render() {
        return(
            <Mode mode={1}>
                <PersonFinder
                    placeholder="Search for users"
                    /**
                    * onChange is a person finder specified event provided via the chayns api
                    * it returns the selected user to the addUser function
                    */
                    onChange={this.props.addUser}
                />
            </Mode>
        );
    }
};