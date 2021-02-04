const num=[2,3,4,5,6,7,8,9];
const numSlice = num.slice(2,4);

const numSplice = num.splice(2,5, 77);
console.log(numSlice);

console.log(num);
console.log(numSplice);

const together = num.join(" ")
console.log(together)


function doSomething(x, y = 4){

    console.log(y);
    
    }
    
    doSomething(3,2);