// This program calculates the average of all scores given
function averageScore(...scores: number[]): number {
  // Adds all scores together and divides by the number of scores
  let total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// Example: finding the average of four scores
//console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.

function myAverageScore(...scores: number[]): number {
  let total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}
console.log(myAverageScore(30, 40, 70, 10, 50));

function magicBox(valueToAdd: number): (number) => number {
  return function (number: number): number {
    return number + valueToAdd;
  };
}

let addTen = magicBox(10);
console.log(addTen(40));
console.log(addTen(10));
console.log(addTen(90));
console.log(addTen(100));

let userProfile = (function () {
  let name = "Kashmala";
  let age = 19;

  return {
    displayInfo: function () {
      console.log(`Name: ${name}, Age: ${age}`);
    },
  };
})();

userProfile.displayInfo(); 

//Day21

enum vehicleTypes {
    cars,
    truck,
    motorBike
};

console.log(vehicleTypes.cars);
console.log(vehicleTypes.truck);
console.log(vehicleTypes.motorBike);


interface students {
    name: string;
    age: number;
    courses:string[];
}
let student:students={
    name: "Adeeba",
    age: 19,
    courses: ["English","Physics"]
};

console.log(student);

type shape = {
    kind: "circle" | "rectangle",
    radius? : number;
    width?  : number;
    height? : number;
};

let circle : shape = {
    kind: "circle",
    radius : 5,
};

let rectangle: shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);