

function fizzBuzz(n) {
    let reminder;
    let array =[];



if( n%3==0 && n%5==0){
    reminder = "fizzBuzz";
 
}
else if (n%3==0){
    reminder = "Fizz";
   
}
else if (n%5==0){
     reminder = "Buzz";
}
else {
       reminder = n;
}

return reminder;

}
   
 
 


  console.log(fizzBuzz(9))