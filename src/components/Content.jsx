import React from 'react';

import { Mode } from 'tobit-chayns_components/react-chayns-modeswitch';
import UserList from './user_view/UserList';
import PersonFinder from './admin_view/PersonFinderWrapper';

export default class Content extends React.Component {
    constructor() {
        super();
        /**
         * Apply an array containing selected users to the content
         * It can be filled by using the person finder in the chayns® manager view
         */
        this.state = {
            user: []
        };
        this.addUser = this.addUser.bind(this);
    }

    /**
     * Push´s an user object to the state 'user' and refresh's the react component 'UserList'
     */
    addUser(object) {
        const { user } = this.state;
        this.setState({
            user: [...user, object.user]
        });
    }

    render() {
        return (
            <div className="tapp__content content">
                {/**
                 * Everything defined as a child of Mode is only visible for users
                 * in the UAC-Group 1
                 *
                 * The UAC-Group 1 is defined for chayns-Manager
                 */}
                <Mode mode={1} group={1}>
                    <PersonFinder
                        addUser={this.addUser}  //Provide the addUser function to the person finder as a prop
                    />
                </Mode>
                <UserList
                    user={this.state.user} //Provide the user list array to the UserList element as a prop
                />
            </div>
        );
    }
}