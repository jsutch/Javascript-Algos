//Assignment: Max, Min, and Average
//Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that prints the maximum number in the array, minimum value in the array as well as the average values in the array. 

var numbers = [1,2,3,4,5,6,7,8,9]

min = numbers[0];
max = numbers[0];
avg = 0;
for (i=0;i < numbers.length - 1;i++) {
	if (nums[i] > max) {
		max = nums[i];}
	if (nums[i] < min) {
		min = nums[i]; }
	sum += numbers[i]
		avg = sum / numbers.length
}
console.log("Min is", min, "Max is", max, "Avg is", avg)
