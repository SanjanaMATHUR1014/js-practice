let arr= [22,5,87,45,100,23];
let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log("Maximum Number:" , max);