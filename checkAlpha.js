// This program checks whether the entered character is a vowel or consonant

const readline = require('readline');

// Create interface for input and output
const rl = readline.createInterface({
               input: process.stdin,
               output: process.stdout
});

// Take input from usergit 
rl.question("Enter an alphabet = ", function (alpha) {

               switch (alpha) {

                              // Check for vowels for lowercase 
                              case 'a':
                              case 'e':
                              case 'i':
                              case 'o':
                              case 'u':

                              // Check for vowels for uppercase
                              case 'A':
                              case 'E':
                              case 'I':
                              case 'O':
                              case 'U': console.log(alpha + " is a vowel");
                                             break;

                              default:
                                             console.log(alpha + " is a consonant");
               }

               rl.close();
});
