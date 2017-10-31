// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: MY FIRST PULL REQUEST
 * 
 * The point of this little exercise is to get you familar with how we role with 
 * working on and submitting assignments. You'll code, save, run the tests, and 
 * once they're passing, you'll push the changes to your fork, then make a pull
 * request.
 * 
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec -g "#my-first-pull-request"
 * 
 */

/** 
 * Given an input value, print the value to the screen using console.log().
 */
 
 var value = 1;
 
function print(value) {
  // YOUR CODE BELOW HERE //

 return value + 1;
 

 
 
  
  
  
  // YOUR CODE ABOVE HERE //
}

console.log(print(value));




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.print = print;
}
