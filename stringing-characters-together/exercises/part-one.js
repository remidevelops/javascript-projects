let num = 1001;

//Returns 'undefined'. DOES NOT GIVE LENGTH OF A NUMBER
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

let stringedNumber = num.toString();
let lengthOfNum = stringedNumber.length;
console.log(stringedNumber.length);


//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
//THE PERIOD COUNTS IN THE LENGTH and must be modified to remove the period
let decVal = 1234.56
let decValString = decVal.toString();
let lengthOfD = decVal.length;
console.log(decValString.length);

let decValWithout = decValString.replace('.', '');//removed the period from a string
console.log(decValWithout.length);//prints string excluding period


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num).includes('.')){
    console.log(String(num).length-1);
    } else {
    console.log(String(num).length);
    }