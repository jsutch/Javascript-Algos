// Shift values in an array to the left, popping array[0], and adding a zero at rightmost to complete the array length
// Assignment: Shifting the values in the array
//Given an array x (e.g. [1,5, 10, 7, -2]), create an algorithm (sets of instructions) that shifts each number by one (to the front).  For example when the program is done x (assuming it was [1,5,10,7,-2]) should become [5,10,7,-2, 0].  

var nums=[1,2,3,4,5,6,7,8,9];
for (var i=0;i < nums.length -1;i++) {
nums[i] = nums[i +1];
}
nums[nums.length -1] = 0;
console.log(nums)