// Assignment: Removing Negatives
//Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), write a program that removes any negative values in that array.  Once your program is done, the array should be composed of only the non-negative numbers, in their original order.  Do this without creating a temporary array; only use the pop() method to remove values from the array.


//Assignment: Eliminate Negative Numbers
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that replaces any negative number with the value of 0.  When the program is done x should have no negative values (e.g. [1, 5, 10, 0]).

// replace in place
for (var i = 0;i < negs.length -1;i++) {
if (negs[i] < 0) {
negs[i] = 0;
}
}
console.log(negs)