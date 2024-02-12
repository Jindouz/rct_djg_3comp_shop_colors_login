import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Welcome from './components/Welcome';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<h2>Please choose a route link from the navigation bar</h2>} />
                    <Route path="/Admin" element={<Admin />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/welcome' element={<Welcome />} />
                </Route>
                <Route path="*" element={<h1 style={{ textAlign: 'center' }}>Error: Page not found</h1>}></Route>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>
);

