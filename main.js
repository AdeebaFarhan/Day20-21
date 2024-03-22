// This program calculates the average of all scores given
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    // Adds all scores together and divides by the number of scores
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
// Example: finding the average of four scores
//console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.
function myAverageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
console.log(myAverageScore(30, 40, 70, 10, 50));
function magicBox(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addTen = magicBox(10);
console.log(addTen(40));
console.log(addTen(10));
console.log(addTen(90));
console.log(addTen(100));
var userProfile = (function () {
    var name = "Kashmala";
    var age = 19;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        },
    };
})();
userProfile.displayInfo();
//Day21
var vehicleTypes;
(function (vehicleTypes) {
    vehicleTypes[vehicleTypes["cars"] = 0] = "cars";
    vehicleTypes[vehicleTypes["truck"] = 1] = "truck";
    vehicleTypes[vehicleTypes["motorBike"] = 2] = "motorBike";
})(vehicleTypes || (vehicleTypes = {}));
;
console.log(vehicleTypes.cars);
console.log(vehicleTypes.truck);
console.log(vehicleTypes.motorBike);
var student = {
    name: "Adeeba",
    age: 19,
    courses: ["English", "Physics"]
};
console.log(student);
var circle = {
    kind: "circle",
    radius: 5,
};
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);
