import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

const Nav = () => {
    const { user, setUser } = useContext(UserContext);

    const Logout = () => {
        // Clear the user state
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <div style={{ marginLeft: '10px' }}>
            <Link className='btn btn-primary' to="/">Home</Link>{" "}
            {user ? (
                <>
                    <Link className='btn btn-primary' to="/welcome">Welcome Page</Link>{" "}
                    {user.superuser ? (
                        <Link className='btn btn-warning' to="/admin">Admin Page</Link>
                    ) : null}{" "}

                    <Link className='btn btn-primary' to="/login" onClick={Logout}>Logout</Link>{" "}
                </>
            ) : (
                <>
                    <Link className='btn btn-primary' to="/login">Login</Link>{" "}
                    <Link className='btn btn-primary' to="/register">Register</Link>{" "}
                </>
            )}
            {user && <h5>Logged in as {user.superuser && 'admin'} {user.username}</h5>}
        </div>
    );
};

export default Nav;
