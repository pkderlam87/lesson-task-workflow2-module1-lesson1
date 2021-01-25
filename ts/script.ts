// Question 1
let anything: any;
let off: boolean;
let word: string;
let total: number;

// Question 2
let booleans: boolean[];
// or
let myBooleans: Array<boolean>;

// Question 3
let twoTypes: (string | number)[];

// Question 4
let tuple: [string, string, number];

//Question 5
function doSomething(arg1: string | boolean, arg2: number | string) {
	console.log(typeof arg1);
	console.log(typeof arg2);
}
