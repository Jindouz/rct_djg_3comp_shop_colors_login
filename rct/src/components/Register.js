import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/register', {
        username: username,
        password: password,
        email: email,
      });

      // Handle the response, e.g., show a success message to the user
      console.log('Registration successful:', response.data);

    } catch (error) {
      // Handle error, e.g., show error message to the user
      console.error('Registration failed:', error.response.data);
    }
  };

  return (
    <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Register</h2>
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
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleRegister}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
  );
};

export default Register;
