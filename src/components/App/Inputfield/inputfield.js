// INPUT FIELD COMPONENT
// THIS IS THE TEXT INPUT BOX THAT THE USER WILL TYPE INTO.
// STATE: user's input text

//IMPORTS
import React , {useState} from "react";


// VARIABLES
const buttonText = ">"
// FUNCTIONS


function InputField({something}) {
    // SET STATE: this sets the state of 
    const [textState, setTextState] = useState("");


    // RETURN & RENDER:
    return (
        <>
            <input onChange={function(event) {
                // event.target.value - an event that we want to target the value of; in this case, it's text (value) being input by the user (event).
                setTextState(event.target.value);
                
            }}/>
            <button onClick={function(){something(textState)}}>{buttonText}</button>
        </>
    );
}



export default InputField;














