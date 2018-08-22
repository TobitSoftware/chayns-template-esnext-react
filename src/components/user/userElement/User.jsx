import React from 'react';
import PropTypes from 'prop-types';
import { Mode } from 'chayns-components/lib';

/**
 * to keep your scss cleaner und more readable you can make a scss-file for each Component. This way your Code stays modular
 */
import './user.scss';

/**
 *
 * @param userId
 * @param name
 * @param removeUser
 * @constructor
 *
 * The User-Component as a stateless Component with 3 Parameters
 */
const User = ({ userId, name, removeUser }) => (
    <div className="user">
        <div className="user__info">
            <div
                className="user__image"
                style={{
                    backgroundImage: `url(https://sub60.tobit.com/u/${userId}`
                }}
            />
            <div className="user__name">
                {name}
            </div>
        </div>

        <Mode mode={1} group={1}>
            <div
                className="user__remove"
                onClick={() =>
                    removeUser(userId)
                }
            >
                <span>x</span>
            </div>
        </Mode>

    </div>
);

User.propTypes = {
    name: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    removeUser: PropTypes.func.isRequired
};

export default User;
