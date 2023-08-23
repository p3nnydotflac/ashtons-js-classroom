/*
Write a program that takes the value of a variable called q1 (declared as any whole number at the top of your program) 
and outputs whether the number (q1) is even or odd by displaying a message in the following format, 
either: “x is even” or “x is odd” where x is the value of the q1 variable.
*/

var q1 = 8

if (q1 % 2 == 0) {console.log(q1 + " " + "is even")}

else {console.log(q1 + " " + "is odd")}

// Declare and initialize the variable q2 with the value 4.
var q2 = 4;

// Declare two variables, fact and i, and initialize i with the value 1.
var fact, i = 1;

// Start of a for loop. This loop will iterate from i = 1 to i = q2 (4 in this case).
// Each iteration, the value of fact will be multiplied by i.
for(i=1; i <= q2; i++) {
    fact = (fact * i);
}

// Start of a do-while loop. This loop will execute at least once.
// Inside the loop, fact will be multiplied by i, and then i will be incremented.
// The loop will continue as long as i is less than or equal to q2.

do {
    fact = (fact * i);
    i++;
} while (i <= q2);
