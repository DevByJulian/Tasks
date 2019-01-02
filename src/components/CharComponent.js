import React from 'react';

const Char = (props) => {
    const styles = {
        display: "inline-block", 
        padding: "16px", 
        textAlign: "center", 
        margin: "16px", 
        border: "1px solid black"
    } 
    
    return (
        <div onClick={props.clicked} style={styles} >
{props.character}
        </div>
    )
}

export default Char;