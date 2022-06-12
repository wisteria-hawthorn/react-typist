// ~ L E V E L -- 0 ~
// THE APP COMPONENT
// THIS PAGE'S FUNCTION RENDERS THE APP TO THE BROWSER.

// IMPORTS:
import React from 'react';
import './App.css';
import {useState} from "react";
import InputField from "../Inputfield";
import IpsumTextGen from "../Ipsumtext";


// FUNCTION: APP COMPONENT
function App() {
  const myHeading = "t y p i n g  s a m p l e"
  const myPara = "~ test your typing accuracy ~"


  // RETURN & RENDER
  return (
    <div className="App">
      <div className="content">
        <h1 className="h1">{myHeading}</h1>
        <p className="descr-para">{myPara}</p>
      </div>
      <div className="ipsumHolder">
        <IpsumTextGen ipsumText={IpsumTextGen}></IpsumTextGen>
      </div>
      <div className="input-field">
        <InputField inputField={InputField}></InputField>
      </div>
    </div>
  );
}

// EXPORT THE COMPONENT: 
export default App;
