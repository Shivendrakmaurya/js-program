// This program checks whether the entered character is a vowel or consonant

const readline = require('readline');

// Create interface for input and output
const rl = readline.createInterface({
               input: process.stdin,
               output: process.stdout
});

// Take input from usergit 
rl.question("Input alphabet,digit,symbol = ", function (symbol) {

               if ((symbol >= 'a' && symbol <= 'z') || (symbol >= 'A' && symbol <= 'Z')) {
                              console.log(symbol + " is a alphabet");
               }
               else if (symbol >= '0' && symbol <= '9') {
                              console.log(symbol + " is a digit");
               }
               else {
                              console.log(symbol + " is a symbol");
               }
                              
                              rl.close();
});
