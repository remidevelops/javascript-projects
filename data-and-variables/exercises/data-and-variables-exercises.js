// Declare and assign the variables below

let spaceShuttleName = "Determination";

let shuttleSpeedMph = 17500; 

let distanceToMarsKm = 225000000;

let distanceMoonKm = 384400;

let milesPerKilometer = 0.621;




// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof spaceShuttleName);

console.log(typeof shuttleSpeedMph);

console.log(typeof distanceToMarsKm);

console.log(typeof distanceMoonKm);

console.log(typeof milesPerKilometer);


// Calculate a space mission below

let milesToMars = distanceToMarsKm * milesPerKilometer;

let hoursToMars = milesToMars / shuttleSpeedMph;

let daysToMars = hoursToMars / 24;


// Print the results of the space mission calculations below

console.log(spaceShuttleName + " will take " + daysToMars + " to get to Mars.");

// Calculate a trip to the moon below

let milesToMoon = distanceMoonKm * milesPerKilometer;

let hoursToMoon = milesToMoon / shuttleSpeedMph;

let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below

console.log(spaceShuttleName + " will take " + daysToMoon + " to get to the Moon.");