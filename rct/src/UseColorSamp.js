import React, { useContext } from 'react'
import UserContext from './UserContext'

const UseColorSamp = () => {
    const { sharedValue, setsharedValue } = useContext(UserContext)

    const DefaultColor = () => {
        setsharedValue("#58ce5a")
    }

    return (
        <div style={{ backgroundColor: "#cdcdcd", textAlign: 'center' }}>
            <h5>UseColorSamp Component</h5>
            <button className='btn btn-primary' style={{ backgroundColor: sharedValue }} onClick={() => DefaultColor()}>Display Color</button>
        </div>
    )
}

export default UseColorSamp