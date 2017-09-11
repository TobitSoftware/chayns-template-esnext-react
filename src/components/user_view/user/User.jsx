import React from 'react';
import PropTypes from 'prop-types';
import { Mode } from 'chayns-components';

import './user.scss';

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
            <div className="user__remove" onClick={() => removeUser(userId)}>
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
