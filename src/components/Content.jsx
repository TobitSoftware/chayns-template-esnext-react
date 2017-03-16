import React from 'react';

import UserList from './user_view/UserList';
import PersonFinder from './admin_view/PersonFinder';

export default class Content extends React.Component{
    constructor(){
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

    //Pushs an user object to the state 'user' and refresh's the react component 'UserList'
    addUser(object) {
        let user = this.state.user;
        user.push(object.user);
        this.setState({
            user: user
        });
    }

    render() {
        return(
            <div className="tapp__content content">
                <PersonFinder
                    addUser={this.addUser}  //Provide the addUser function to the person finder as a prop
                />
                <UserList
                    user={this.state.user} //Provide the user list array to the UserList element as a prop
                />
            </div>
        );
    }
}