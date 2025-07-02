let num=17;
let isPrime=true;
if(num<2){
    isPrime=false;
}else{
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            isPrime=false;
            break;
        }
    }
}
console.log(num + ( isPrime ? "is Prime" : "is not Prime"));