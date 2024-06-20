//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1));//could also make a variable for j and s and then add them together
console.log(language.slice(4,5));//you would could add them together using ${} or print the two variables


console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.

console.log(language.substring(0,1));
console.log(language.substring(4,5));

let initials = (language.substring(0,1) + language.slice(4,5));
console.log(initials);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
//kind of confused here idk why the brackets keep printing?
//is the solution wrong? or mu understanding of bracket notation is not correct?
console.log("The abbreviation for [" + language + "] is [" + initials + "].");

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

let forFun = (language.slice(0,1) + language.substring(4,5) + ", " + language.length + ", " + language.toLowerCase());
console.log(forFun);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let realCase = notTitleCase.replace("title case", "Tital Case");

console.log(realCase);