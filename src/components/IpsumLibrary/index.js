// ISPUM LIBRARY
// THIS WILL EVENUTALLY BE REPLACED BY AN API / HEROKU SITUATION.

// 11/06/22 -- experimenting with what method I should use; full string vs. array storing each word

// IMPORTS:

import React from "react";



// VARIABLES:

const ipsMyst = ["It's" , "so" , "unsettling" ,  "to" , "feel" , "anything" , "but" , "good." , "I" , "wish" , "I" , "was" , "only" , "as" , "cruel" , "as" , "the" , "first" , "time" , "I" , "noticed" , "I" , "was" , "cruel," , "waving" , "my" , "tiny" , "shadow" , "over" , "a" , "pond" , "to" , "scare" , "the" , "copper" , "minnows."]

const ipsEmily = "This traverse may the poorest take, without oppress of toll, how frugal is the chariot that bears the human soul."

const ipsAnthro = {
    
    anthroOne : "It's no wonder we worry about the end of the world; worlds end all the time." ,
    
    anthroTwo : "We all know how loving ends. But I want to fall in love with the world anyway, to let it crack me open. I want to feel what there is to feel while I am here."

};

// No unused vars... fine VS Code, I'll use 'em.
console.log(ipsMyst);
console.log(ipsEmily);
console.log(ipsAnthro);


export { ipsMyst } from "/index.js"



/* 
TEXT SAMPLE STORAGE (QUICK ACCESS FOR REFACTORING):

FORFEITING MY MYSTIQUE - KAVEH AKBAR: 
It’s so unsettling to feel anything but good. I wish I was only as cruel as the first time I noticed I was cruel, waving my tiny shadow over a pond to scare the copper minnows.

THERE IS NO FRIGATE LIKE A BOOK - EMILY DICKINSON: 
This traverse may the poorest take , without oppress of toll, how frugal is the chariot that bears the human soul.

THE ANTHROPOCENE REVIEWED - JOHN GREEN:
- It's no wonder we worry about the end of the world; worlds end all the time.

- We all know how loving ends. But I want to fall in love with the world anyway, to let it crack me open. I want to feel what there is to feel while I am here.

*/
