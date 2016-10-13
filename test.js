<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Online Algorithms W2D5</title>
        <script type="text/javascript" charset="utf-8" async defer>
	"use strict";
	​
	// Statistics Until Doubles
	// // Implement a ’20-sided die’ that randomly returns integers between
	// // 1 and 20 inclusive. Roll these, tracking statistics until you get
	// // a value twice in a row. Display number of rolls, min, max, and average.  
	// function statsUntilDoubles()
	// {
	//   var prevRoll = 0;           // Guaranteed to enter WHILE at least once.
	//     var roll = rollDie(20);
	//       var numRolls = 1;           
	//       ​
	//         var sum = roll;             // After the first roll, our running total, 
	//           var min = roll;             // minimum value, and maximum value are all
	//             var max = roll;             // equal to that first roll.
	//             ​
	//               while (roll != prevRoll)    // Keep rolling until we get doubles.
	//                 {
	//                     prevRoll = roll;          // We only care about the most recent roll,
	//                         roll = rollDie(20);       // don't need the entire history (no array). 
	//                             numRolls++;
	//                             ​
	//                                 sum += roll;    
	//                                     if (roll < min) { min = roll; }
	//                                         if (roll > max) { max = roll; }
	//                                           }
	//                                             console.log("We rolled " + numRolls + " times, with minimum: " + min +
	//                                                           ", maximum: " + max + " and average: " + sum/numRolls);
	//                                                           }
	//                                                           // Generic function to roll a multi-sided die. 
	//                                                           // For an example, let's assume 'sides' has a value of 6.
	//                                                           // First, Math.random() to get a num between 0 and almost-1.
	//                                                           // Then, multiply by sides to get a num between 0 and almost-6.
	//                                                           // Then, Math.trunc() to get equally probable ints 0,1,2,3,4,5.
	//                                                           //   If we use Math.ceil(), there is still a chance of 0, and
	//                                                           //   the chance of 5 would be slightly less than chance of 1-4.
	//                                                           function rollDie(sides)
	//                                                           {
	//                                                             return Math.trunc(Math.random() * sides) + 1;
	//                                                             }
	//                                                             ​
	//                                                             ​
	//                                                             ​
	//                                                             // Is Prime
	//                                                             // Given an integer, return whether it is a prime number.
	//                                                             // Prime numbers are only evenly divisible by themselves and 1.
	//                                                             // More optimized versions are not as easy to understand.
	//                                                             function isPrime(num)
	//                                                             {
	//                                                               num = Math.trunc(num);
	//                                                                 if (num < 2) { return false; }
	//                                                                 ​
	//                                                                   for (var count = 2; count < num; count++) {
	//                                                                       if (num / count == Math.trunc(num/count)) {
	//                                                                             return false;
	//                                                                                 }
	//                                                                                   }
	//                                                                                     return true;
	//                                                                                     }
	//                                                                                     ​
	//                                                                                     ​
	//                                                                                       </script>
	//                                                                                       </head>
	//                                                                                       <!-- <body> -->
	//                                                                                       <!-- </body> -->
	//                                                                                       </html>
	//
