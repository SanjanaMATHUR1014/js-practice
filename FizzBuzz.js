/*FizzBuzz Problem: Print numbers from 1 to 100 but with a twist.....
If a number is divisible by 3, print "Fizz" instead of the number
If a number is divisible by 5, print "Buzz" instead of the number
If a number is divisible by both 3 and 5, print "FizzBuzz"
Otherwise, just print the number*/

for(let i=1; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }else if(i%3===0){
        console.log("Fizz");
    }else if(i%5===0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}


