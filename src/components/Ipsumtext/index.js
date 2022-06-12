// L E V E L --  
// THE IPSUMTEXT COMPONENT
// THIS PAGE'S FUNCTION:
//  - FETCHES IPSUM TEXT FROM DB / USES IPSUM FROM A LIBS ARRAY
//  - STORES THE TEXT AS AN ARRAY
//      - EACH WORD AS AN ARRAY INDEX?
//      - MAP OVER EACH ARRAY INDEX?

// IMPORTS
import React from "react";
import { ipsMyst } from "../IpsumLibrary"

// FUNCTION: IPSUMTEXTGEN COMPONENT - this generates ipsum text via the imported arrays
// eventually: import the arrays from a Heroku db / API / whatever
function IpsumTextGen() {

    // eventually: something here to randomly generate one of the imported ipsums into a dynamic value. {}
    const newIpsumArr = [...ipsMyst]
    

    // maybe map over the array for styling?
    // - OG array: whole thing is colorOne.
    // - change with state (?): 
    //    - each [array index] is set to colorTwo if input matches [array index] exactly
    //    - each [array index] is set to colorThree if input DOESN'T match [array index] exactly
    //    - can we use expect.toEqual? 

    // RENDER & RETURN: - renders the generated array as a para
    return (
        <div className="ipsumtextcontainer">
            <p className="ipsumtextpara">{newIpsumArr}</p>
        </div>
    );
}

// EXPORT THE COMPONENT
export default IpsumTextGen;



// Notes: idk if I'm using the components in the right way here, or whether I should be rendering them directly from the import; here, or in a different file.






