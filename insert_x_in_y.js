//Assignment: Insert X in Y
//Write a program that inserts a new number X at an index Y. For example if array = [1, 3, 5, 7] and X = 10, and Y = 2, by the end of your program array should be [1, 3, 10, 5, 7] (in other words we added '10' on index 2). Check the output of your array once your program is completed to make sure it's working correctly.


// using splice
x=666;y=2
nums.splice(y, 0, x);
console.log(nums)

// make a copy of all the numbers from the  desired insertion index  rightways to the end, then overwrite the (now copied) number with x

x=666;y=2
for (i=nums.length -1;i > y;i--) {
nums[i] = nums[i -1]
}
nums[y] = x;
console.log(nums)