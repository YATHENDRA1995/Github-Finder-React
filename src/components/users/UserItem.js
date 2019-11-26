import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = (props) => {

    const { login, avatar_url } = props.user;

    return (
        <div className="card text-center">
            <img
                src={avatar_url}
                alt="profile"
                className='round-img'
                style={{ width: '60px' }}
            />
            <h3>{login}</h3>
            <Link
                className="btn btn-dark btn-sm my-1"
                to={`/user/${login}`}>More
            </Link>
        </div>
    );
};

UserItem.propTypes = {
    user: propTypes.object.isRequired
};

export default UserItem;
