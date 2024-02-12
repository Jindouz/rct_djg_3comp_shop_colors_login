// Welcome.js
import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import UserContext from '../UserContext';

const Welcome = () => {
    const { user, setUser } = useContext(UserContext);

    const Logout = () => {
        // Clear the user state
        setUser(null);
        localStorage.removeItem('token');
    };

    // If there's no user (no token), redirect to login page
    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Welcome {user.username}</h1>
            {user.superuser && <p>You are an admin.</p>}
            {user.superuser && <Link className='btn btn-warning' to="/admin">Admin Page</Link>}{" "}
            <button className='btn btn-primary' onClick={Logout}>Logout</button>
        </div>
    );
};

export default Welcome;
