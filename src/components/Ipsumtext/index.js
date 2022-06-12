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
    

    // RENDER & RETURN: - renders the generated array as a para
    return (
        <div className="ipsumtextcontainer">
            <p className="ipsumtextpara">{newIpsumArr}</p>
        </div>
    );
}

// EXPORT THE COMPONENT
export default IpsumTextGen;










