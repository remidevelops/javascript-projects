/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    for (let i = 0; i <= 20; i++) {
   console.log(i);
}
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

  for (let i = 0; i <= 20; i++) {//<= includes the number
    console.log(i);
  }

console.log();

for (let i = 3; i <30; i++) {//++ IS ASCENDING
  if (i % 2=== 1) {//if remainder 2 is odd if remainder is 0 even
    console.log(i);//print the value that will be looped
  }
}

console.log();

for (let i = 12; i >= -14; i -=2) {//-= is descending and icnriment of 2
  console.log(i);
}

for (let i = 50; i >=20; i --){//-- is DESCENDDING
  if (i % 3 === 0) {
    console.log(i);
  }
}

console.log();


/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
*/

let varOne = "LaunchCode";


let cuteArray = [1, 5, "LC101", "blue", 42];

/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - 
  in reverse order - 
  to a new line. */ 


  for (let i = 0; i < cuteArray.length ; i++) {//the array length is the limitation condition
    console.log(cuteArray[i]);//print the array index at i the loop information dictates i
  }

  console.log();
  

  

  for (let i = varOne.length-1; i >= 0; i--) {//read as undefined so use -1 because was donig 1 extra
    console.log(varOne[i]);
  }

  console.log();

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:

  a. One array contains the even numbers, 
  and the other holds the odds.

  b. Print the arrays to confirm the results. */

  let arrayNumbers = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

  let evenNumberedArray = [];

  let oddNumberedArray = [];

for (let i = 0; i < arrayNumbers.length; i ++) {//PUT LESS THAN NOT <= or = BECAUSE WILL DO ONE EXTRA AND THATS WRONG
  //console.log("index " + i);
  //console.log(arrayNumbers[i]);
  if (arrayNumbers[i] % 2 === 0) {
    //console.log("EVE IN");
    evenNumberedArray.push(arrayNumbers[i]);//TO PUT IN EVEN ARRAY THE ORIGINAL ARRAY INDEX OF EVEN NUMBERS
  } else {
    oddNumberedArray.push(arrayNumbers[i]);//WHERE TO GO + WHAT TO PUSH
  }
}
console.log(evenNumberedArray);
console.log("=============================");
console.log(oddNumberedArray);





/*
)
  

  //for (let i = 0; i = ""; i++) {
    //if (numbArray % 2 === 0) {
      //console.log(numbArray);
    
  */