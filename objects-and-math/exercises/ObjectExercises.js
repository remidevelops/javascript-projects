let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let fpsCooked = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let pupper = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 8,
   move: function () {return Math.floor(Math.random()*11)}
};

let unKnown = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 10,
   move: function () {
      return Math.floor(Math.random()*11)
   }
};


let crew = [superChimpOne, salamander, fpsCooked, pupper, unKnown];

function crewReports(crewMember) {//. notation to call

   console.log(`
      ${crewMember.name} is a ${crewMember.species}. 
      They are ${crewMember.age} years old and ${crewMember.mass} kilograms.
      Their ID is ${crewMember.astronautID}.`)
}

// crew.forEach(crewReports);
//for each item in the crew ARRAY run this function in ()
//aka .length for arrays
   // --- crew.forEach(crewReports) ---
   //     go to crew Array [superChimpOne, salamander, fpsCooked, pupper, unKnown]
   //     run crewReports on each crewMember of crew Array
console.log(".........................");
let crewSteps = 0; 
let crewTurnCounter = 0; //must be inside loop or will not return to 0 for next member of crew
let crewTurnsArray = []; 

function fitnessTest(crewArray) { //crew will be the parameter here

   for (let crewMate of crewArray){//loop goes through each 1 member of the array at a time
      crewSteps = 0;
      crewTurnCounter = 0; //restarts at 0 when the for loop restarts for the next member
      while (crewSteps < 20) {//condition for the loop 
         
         crewSteps += crewMate.move(); //adds the move function ammount together and updates the crewsteps of the 1 member

         crewTurnCounter++;  //counter iteration keeping track of each 1 member turn on their way to 20 steps
      }  
      crewTurnsArray.push(crewMate.name + " took " + crewTurnCounter + " turns to take 20 steps.");//push the result of hte crewturncounter into the crew turns array lined up with each member
   }  
      // if (crewSteps >= 20) {
      //    console.log(`${crewMate.name} took ${crewTurnsArray} turns to take 20 steps.`);
      // }
   return crewTurnsArray;//need to return functions so that the data can be acessed outside of the function
}

fitnessTest(crew);//use the function fitness test with the crew parameter

// console.log(crewTurnsArray);

for (let crewTurnString of crewTurnsArray) {//for loop that goes through each element in the crewturns array and prints the string element
   console.log(crewTurnString);
   console.log();
}

// X After you have created the other object literals, add the astronautID property to each one.

// X Add a move method to each animal object

// X Create an array to hold the animal objects.

// X Print out the relevant information about each animal.

// Start an animal race! 
