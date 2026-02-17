// Program to find the largest of three numbers


// Importing readline module to take input from user
const readline = require("readline");

const prompt = readline.createInterface({
               input: process.stdin,
               output: process.stdout

});
// Taking inputs from user
prompt.question("Enter first number = ", function (a) {
               prompt.question("Enter second number = ", function (b) {
                              prompt.question("Enter third number = ", function (c) {
                                             a = parseInt(a);
                                             b = parseInt(b);
                                             c = parseInt(c);

                                             // Finding the largest number among a, b and c
                                             if (a >= b && a >= c) {
                                                            console.log("Largest number is = " + a);
                                             }
                                             else if (b >= a && b >= c) {
                                                            console.log("Largest number is = " + b);
                                             }
                                             else {
                                                            console.log("Largest number is = " + c);
                                             }
                                             prompt.close();
                              });
               });
});