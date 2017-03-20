import React from 'react';
import Accordion from 'tobit-chayns_components/react-chayns-accordion';

import './UserList.scss';

export default class UserList extends React.Component {

    //whenever the user prop gets a new value re-render this element. Users were added in the Content.jsx via the PersonFinder
    static propTypes = {
        user: React.PropTypes.arrayOf(React.PropTypes.object)
    };

    constructor() {
        super();
    }

    /**
     * If at least one user was selected, render the users inside the user list
     * Else return a placeholder text
     *
     */
    renderContent(){
        if(this.props.user.length > 0) {
            return this.props.user.map((user, index) => {
                return (
                    <div className="user" key={index}>
                        <div
                            className="user_image"
                            style={{backgroundSize: 'cover', backgroundImage: 'url(http://graph.facebook.com/' + user.facebookId + '/picture?type=square'}}
                        >
                        </div>
                        <div className="user_name">
                            {user.name}
                        </div>
                    </div>
                )
            })
        } else {
            return <div>No users have been selected</div>
        }
    }

    render() {
        return(
            <Accordion head="User List" defaultOpened>
                <div className="accordion__content" id="usersList">
                    {
                        this.renderContent()
                    }
                </div>
            </Accordion>
        );
    }
};