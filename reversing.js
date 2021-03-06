//Assignment: Reversing
//Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), write a program that reverses the values in the array.  Once your program is done X should be in the reserved order.  Do this without creating a temporary array.  Also, do NOT use the reverse method but find a way to reverse the values in the array (HINT: swap the first value with the last; second with the second to last and so forth).


nums = [1,2,3,4,5,6,7,8];
console.log("Original Array",nums);
for (x=0;x<nums.length / 2;x++) {
	temp = nums[x];
	nums[x] = nums[nums.length -1 -x];
	nums[nums.length -1 -x] = temp;
}
console.log("New Array", nums);
