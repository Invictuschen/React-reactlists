import React from 'react';
import Radium from 'radium';

const person = (props) =>{
    const style={
        '@media(min-width: 300px)':{width:'60%'}
    };
    return <div style={style} className="box"><h1 onClick={props.click}>I am {props.name} and I am {props.age} years old.
        <div>My hobby is {props.children}</div></h1><input type="text" onChange={props.change}/></div>
}
export default Radium(person);