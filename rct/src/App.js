import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import UserContext from './UserContext';
import UseColorSamp from "./UseColorSamp";
import Color from "./Color";
import { ShoppingProvider } from "./shop/ShoppingContext";
import ShoppingList from "./shop/ShoppingList";
import MyCart from "./shop/MyCart";
import QuantityDisplay from "./shop/QuantityDisplay";
import { jwtDecode } from "jwt-decode";

const App = () => {
    const [user, setUser] = useState(null);
    const [sharedValue, setsharedValue] = useState("#58ce5a")

    useEffect(() => {
        // Check for token in localStorage on page load
        const token = localStorage.getItem('token');
        if (token) {
          // Set user state based on token
          const user = jwtDecode(token);
          setUser(user);
        }
      }, []);
      
    return (
        <div >
            <UserContext.Provider user={user} value={{ user, setUser, sharedValue, setsharedValue }}>
                <hr></hr>
                <Nav></Nav>
                <hr></hr>
                <Outlet></Outlet>
                <hr></hr>
                <UseColorSamp></UseColorSamp>
                <br></br>
                <Color></Color>
                <hr></hr>
                <ShoppingProvider>
                    <QuantityDisplay />
                    <ShoppingList />
                    <MyCart />
                </ShoppingProvider>
            </UserContext.Provider>
        </div>
    );
}

export default App;


