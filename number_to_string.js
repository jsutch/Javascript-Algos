// replace all instances of a negative number in an array to the string "Dojo"
// Assignment: Number to String
//Write a program that takes an array of numbers and replaces any number that's negative to a string called 'Dojo'. For example if array = [-1, -3, 2] after your program is done array should be ['Dojo', 'Dojo', 2].

for (var i = 0;i < negs.length -1;i++) {
if (negs[i] < 0) {
negs[i] = "Dojo";
}
}
console.log(negs)