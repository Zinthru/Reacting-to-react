import React from 'react';

const Greeter = props => {
    return (
        <>
          <h1>Hello, my name is {props.name} and I say{props.phrase}.</h1> 
        </>
    );
}

export { Greeter };
