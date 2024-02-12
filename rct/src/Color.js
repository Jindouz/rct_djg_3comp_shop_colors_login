import React, { useContext } from 'react'
import UserContext from './UserContext'

const Color = () => {
    const { sharedValue, setsharedValue } = useContext(UserContext)
    return (
        <div style={{ backgroundColor: sharedValue, textAlign: 'center' }}>
            <h5>Color Component</h5>
            <button onClick={() => setsharedValue("red")}>Red</button>
            <button onClick={() => setsharedValue("blue")}>Blue</button>
            <button onClick={() => setsharedValue("cyan")}>Cyan</button>
            <button onClick={() => setsharedValue("yellow")}>Yellow</button>
        </div>
    )
}

export default Color