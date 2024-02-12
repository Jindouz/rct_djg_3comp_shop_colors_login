import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import UserContext from '../UserContext';

const Admin = () => {
  const { user, setUser } = useContext(UserContext);


  const Logout = () => {
    // Clear the user state
    setUser(null);
    localStorage.removeItem('token');
  };

  // If user is null, redirect to login page
  if (!user) {
    console.log("User is not authenticated. Redirecting to login page...");
    return <Navigate to="/login" />;
  }

  // If user is not an admin, redirect to login page
  if (!user.superuser) {
    console.log("User is not an admin. Redirecting to login page...");
    return <Navigate to="/login" />;
  }


  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome, admin user!</p>
      {user.superuser && <p>This page has admin restricted data.</p>}
      <button className='btn btn-primary' onClick={Logout}>Logout</button>
    </div>
  );
};

export default Admin;
