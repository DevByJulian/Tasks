
import React from 'react';
import './User.css';

const Output = (props) => {
   
return ( <div>
    <p style={{fontWeight: "bold", backgroundColor: "blue", color: "white"}}>{props.username}</p>
    </div>)
}

export default Output;