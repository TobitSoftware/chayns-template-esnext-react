import React from 'react';
import Accordion from 'tobit-chayns_components/react-chayns-accordion';

import './UserList.scss';

export default class UserList extends React.Component {
    /**
     * Whenever the user prop gets a new value re-render this element. Users were added in the Content.jsx via the PersonFinder
     */
    static propTypes = {
        user: React.PropTypes.arrayOf(React.PropTypes.object)
    };

    /**
     * If at least one user was selected, render the users inside the user list,
     * else return a placeholder text.
     */
    getUserList() {
        const { user } = this.props;
        if (user.length > 0) {
            return user.map(({ name, facebookId }, index) => {
                return (
                    <div className="user" key={index}>
                        <div
                            className="user__image"
                            style={{
                                backgroundSize: 'cover',
                                backgroundImage: `url(http://graph.facebook.com/${facebookId}/picture?type=square`
                            }}
                        ></div>
                        <div className="user__name">
                            {name}
                        </div>
                    </div>
                )
            })
        } else {
            return <div>No users have been selected.</div>
        }
    }

    render() {
        return (
            <Accordion head="User List" defaultOpened>
                <div className="accordion__content" id="usersList">
                    {
                        this.getUserList()
                    }
                </div>
            </Accordion>
        );
    }
};