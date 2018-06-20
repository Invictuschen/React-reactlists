import React from 'react';
const person = (props) =>{
    return <div><h1 onClick={props.click}>I am {props.name} and I am {props.age} years old.
        <div>My hobby is {props.children}</div></h1><input type="text" onChange={props.change}/></div>
}
export default person;