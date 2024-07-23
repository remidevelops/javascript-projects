//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }

    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        let roundedAverage = Math.round(sum / this.scores.length * 100)/100
        return roundedAverage; 
    }

    status() {
        if (this.average() >= 90) {
            return "accepted"; 
        } else if (this.average() >= 90) {
            return "Reserve";
        } else if (this.average >= 70){
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
}

const kondo = new CrewCandidate("Kondo", "100", [95, 98, 90]);

console.log(kondo);

const bubbaBear = new CrewCandidate("Bubba Bear", "135", [88, 85, 90]);
bubbaBear.addScore(78);
console.log(bubbaBear);
console.log(bubbaBear.average());

const merryMaltese = new CrewCandidate("Merry Maltese", "1.5", [93, 88, 97]);

console.log(merryMaltese); 

const gladGator = new CrewCandidate("Glad Gator", "225", [75, 78, 62]);

console.log(gladGator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.


console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`)
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`)
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`)


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.