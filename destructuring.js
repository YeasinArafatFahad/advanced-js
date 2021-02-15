//array destructuring

const numbers = [54, 92, 50, 86];
//const x=numbers[0]
//const y = numbers[1]

// const [x,y]=[54, 45];

const [x, y,z] = numbers;
console.log(x,y,z)

function boxify(num){
    return[num, num+5,num-3]
}
const [box1,box2,box3] = boxify(8);
console.log(box1,box2,box3);

//Object Destructuring

const {name,age}={id: 1, name:'Rahim', age:25 ,money:500};
// const {money} = person;

console.log(name,age);

//create object shortcut
const one = 24;
const two = 35;
const obj = {x:x,y:y};
const obj2 = {one,two};
console.log(obj2)


//create newArray using three dots

const newNumbers = [...numbers,56]
console.log(newNumbers)