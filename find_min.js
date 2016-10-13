// find and print the minimum number from an array
var numbers = [1,2,3,4,5,6,7,8,9]
min = numbers[0];

for (i=0;i < numbers.length - 1;i++) {
	if (numbers[i] < min) {
		min = numbers[i]
	}
	console.log(min)
}
