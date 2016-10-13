// Assignment: Find Average
// Given an array with multiple values (e.g. [1,3,5,7,20]), write a program that prints the average of the values in the array.  Again you're not to do this by using of any of the pre-built functions in Javascript.  Again iterate through each number in the array and update the 'average' as the program retrieves each number in the array.

var numbers = [1,2,3,4,5,6,7,8,9]
for (i=0;i < numbers.length - 1;i++) {
	sum += numbers[i]
		avg = sum / numbers.length
		console.log(avg)
}
