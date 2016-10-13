// Assignment: Swapping two values
//Write a program that takes an array of numbers and returns an array where the first and last numbers in the array have been switched.For example say x = [2, 3, 5, 7, 6]. By the end of the program x, should be [6, 3, 5, 7, 2]. Do this without creating an empty array.


// This method uses [a,b] = [b,a]
var nums=[1,2,3,4,5,6,7,8,9];
[ nums[0], nums[nums.length -1] ] = [ nums[nums.length -1] , nums[0] ];
console.log(nums);

// 
var nums=[1,2,3,4,5,6,7,8,9];
temp=nums[nums.length -1];
nums[nums.length -1] = nums[0];
nums[0] = temp
console.log(nums)
