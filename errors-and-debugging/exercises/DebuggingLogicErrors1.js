// Run this sample code as-is and examine the output. 
// Should the shuttle have launched? 
// Did it?
// Do not worry about fixing the code yet, we will do that in the next series of exercises.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}

//program runs no errors shown when running node DebuggingLogicErrors1.js
//fuel lvl is lss than 20000 and launch ready is false
//expected output 'launch scrubbed'
//current output:
   /*Fuel level cleared.
10, 9, 8...
Fed parrot...
6, 5, 4...
Ignition...
3, 2, 1...
Liftoff!
*/

/*  SOLUTION FROM TEXTBOOK TO COMPARE TO MY RESULTS
The shuttle should not have launched. However, the messages to the console tell a different story. Without any changes, the original code outputs:

  ```console
  WARNING: Insufficient fuel!
  Crew & computer cleared.
  10, 9, 8, 7, 6, 5, 4, 3, 2, 1...
  Liftoff!
  ```
  */