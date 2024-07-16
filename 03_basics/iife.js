//In JavaScript, an IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined. It's a common pattern used to create a local scope, preventing variables from leaking into the global scope.

(function chai(){
    console.log("Mai hoon lucky the racer.")
})();

// ;  If we don't add semi-colon then it can throw some errors.
//Through Arrow function 

( () =>{
    console.log("I'm the master of the whole universe.")
})()