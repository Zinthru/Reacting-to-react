import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';

const App = () => {

    setTimeout(() => {
        const handleLoadState = () => {
            if(loaded===false) {
                <h1>Loading...</h1>
            }
        }             
    },3000);

    const [username,setUsername] = useState(' ');

    const [loaded,setLoaded] = useState(false);

    const handleClickChange = () => {
        setLoaded(true);
        if(setLoaded!=true) {
            setLoaded(false);
        }
    }

    const handleInputChange = () => {
        setUsername();
    }

    
    return (
        <>
            <Greeter name="Dustin" phrase="Waffles!"/>
            <Greeter name="Brad" phrase="I got mine!"/>
            <Greeter name="Jenna" phrase="Wow."/>
            <input type="text" onChange={handleInputChange} value='number' />
            <p>{username} is the username!</p>
            <h1>{handleLoadState()}</h1>
            <button onClick={handleClickChange}>Click me</button>
        </>
    );
}

export {App};
