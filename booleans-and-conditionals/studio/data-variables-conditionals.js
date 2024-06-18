// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const fuelLevel = "100%";
const weatherStatus = "clear";
let preparedForLiftOff = true;
let readyCheck = 0;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <=  7) {
    console.log("Crew accounted for.");
    //console.log("Ready Check ")
    readyCheck += 1;
}



// add logic below to verify all astronauts are ready

if (astronautStatus === 'ready') {
    console.log("Crew ready.");
    readyCheck += 1;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
    //if the totalMassKg is less than the maximumMassLimit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log("Total Mass Kg within limit.");
    readyCheck += 1;
}


// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
    // if the fuelTempCelsius is no less than -300 OR no greater than -150

if (fuelTempCelsius > -300 || fuelTempCelsius < -150) {
    console.log("Fuel Temp in range.");
    readyCheck += 1;
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel === "100%") {
    console.log("Fuel Tank is Full.");
    readyCheck += 1;
}

// add logic below to verify the weather status is clear

if (weatherStatus === "clear") {
    console.log("Sky is Clear.");
    readyCheck += 1;
}

// Verify shuttle launch can proceed based on above conditions
if (readyCheck === 6) {
    console.log(`Ready Check: ${readyCheck}/6`);
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log("");
    console.log("░I░N░I░T░I░A░L░I░Z░I░N░G░");
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
    console.log(`Astronaut Count: ${astronautCount}`);
    console.log(`Crew Mass: ${crewMassKg} kg`);
    console.log(`Fuel Mass: ${fuelMassKg} kg`);
    console.log(`Shuttle Mass: ${shuttleMassKg} kg`);
    console.log(`Total Mass: ${totalMassKg} kg`);
    console.log(`Fuel Temperature: ${fuelTempCelsius} °C`);
    console.log(`Weather Status: ${weatherStatus}`);
    console.log("░I░N░I░T░I░A░T░I░N░G░ ░L░A░U░N░C░H░ ░S░E░Q░U░E░N░C░E░");
    console.log("");
    console.log("(人´∀｀).☆.。.:* Have a safe trip astronauts! ☆彡");
} else {
    ("Scrub launch...")
}

