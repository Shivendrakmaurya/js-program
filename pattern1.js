// To print the following pattern:

// 1
// 1 2
// 1 2 3
// 1 2 3 4     

for (let i = 1; i <= 4; i++) {
               let row = "";
               for (let j = 1; j <= i; j++) {
                              row += j + " ";
               }
               console.log(row);
} 