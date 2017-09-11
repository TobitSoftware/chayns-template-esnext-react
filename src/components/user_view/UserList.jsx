import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'chayns-components';
import User from './user/User';

/**
 * Whenever the user prop gets a new value this component re-renders. Users were added in the Content.jsx via the PersonFinder
 */
export default class UserList extends React.Component {

    static propTypes = {
        user: PropTypes.arrayOf(PropTypes.object),
        removeUser: PropTypes.func.isRequired
    };
    static defaultProps = {
        user: []
    };


    render() {
        const { user, removeUser } = this.props;

        return (
            <Accordion head="User List" defaultOpened>
                <div className="accordion__content" id="usersList">
                    {
                        user && user.map(({ name, userId }) => (
                            <User
                                key={userId}
                                name={name}
                                userId={userId}
                                removeUser={removeUser}
                            />
                        ))
                    }
                    {
                        user.length === 0 && <div>No users have been selected.</div>
                    }
                </div>
            </Accordion>
        );
    }
}
