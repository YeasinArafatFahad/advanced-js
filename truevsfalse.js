//falsy value
//0
//""
//null
//undefined
//NaN
//false

//Truthy
//'0',' '
//[]=empty array
//{}

let name = 0;
if(name == 0 || name){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

function doSomething(x, y = 4){

    console.log(y);
    
    }
    
    doSomething(3,2);