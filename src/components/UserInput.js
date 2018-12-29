import React from 'react'; 

const Input = (props) => {
    const style={
        color: "blue",
        fontWeight: "bold",
        borderColor: "red" 
    }
        return ( <div>
            <input style={style} type="text" onChange={props.change} value={props.username} />
            
            </div> );
    }
 
export default Input;