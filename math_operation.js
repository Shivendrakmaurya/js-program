const readline =  require("readline");

const prompt = readline.createInterface({
               input: process.stdin,
               output: process.stdout
});

prompt.question("Enter first number =", function(a){
prompt.question("Enter second number = ", function(b){

               a = parseFloat(a);
               b = parseFloat(b);

               let  sum = a + b;
               let sub = a - b;
               let mul = a * b;

               console.log("Sum = ",sum);
               console.log("Subtraction =",sub);
               console.log("Multiplication = ",mul);

               if(b !== 0){
                              let div = a/b;
                              console.log("Division = " + div);      
               }else{
                              console.log("Division is not possible (Denominator is zero)");
               }

               prompt.close();
});

});



