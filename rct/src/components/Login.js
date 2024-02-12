import React, { useContext, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import UserContext from '../UserContext';

const Login = () => {
    const { setUser } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const axiosLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/login', {
                username: username,
                password: password,
            });

            localStorage.setItem('token', response.data.access)
            const user = jwtDecode(response.data.access);
            setUser(user);

            console.log('Login successful, Access Token:', response.data.access);

            // redirect to welcome page:
            navigate('/welcome');

        } catch (error) {
            console.error('Login failed:', error.response.data);
            setErrorMessage("Incorrect Username or Password");
        }
    };


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Login</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={axiosLogin}>
                            Login
                        </button>
                    </form>
                    <br/>
                    {errorMessage && <div className="row justify-content-center">{errorMessage}</div>}
                    <p>Admin: waga/123</p>
                    <p>Standard User: waga1/123</p>
                </div>
            </div>
        </div>

    );
};

export default Login;
