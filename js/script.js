//Question 1
//Create variables typed with the following types: any, boolean, string, number.
let varAny = "monkey"; // "any" is a special type that allows for all types of data to be stored.
let isAnimal = false; //Is equivalent to: "let isAnimal:boolean = false;"
let petsName = "Nero"; //Is equivalent to: "let petsName: string = "Nero";"
let petsAge = 2; //Is equivalent to: "let petsAge: number = 2;"
//Question 2
//Create an array that can hold only boolean values.
const animals = new Array(true, false, true, false);
const animalsOtherWay = [true, false, true, false];
//Question 3
//Create an array that can hold either string or number values.
let multipleTypes;
let multipleTypesOtherWay = ["id: ", 0, "animal:", "dog"];
//Question 4
//Create an a tuple with the following types: string, string, number.
let tuple;
//Question 5
//Create a function with two parameters. The first accepts either a string or boolean value, the second accepts either a number or string value.
function doThings(person, age) {
    if (typeof person === "string") {
        console.log(person);
    }
    if (typeof age === "number") {
        console.log(age);
    }
}
doThings("Alice", 6);
//# sourceMappingURL=script.js.map