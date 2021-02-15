const money = 150;
// let food;
// if(money > 100){
//     food = 'biryani';
// }
// else{
//     food = 'alur vorta';
//}
//ternary
let food = money>100?'biryani' :'alur vorta'

const active = true;
if(active ===true){
    cssClass = 'active'
}
else{
    cssClass = 'inactive'
}
const cssClass2 = active ? 'active' : 'inactive';


//function call shortcut alternative
//active ? displayUser() : hideUser()

//
const x = active && 5

console.log(x)

const y = active || 5
console.log(y)

//
const number = +'45'
console.log(number)

const num = 45+""
console.log(num)

//

function add (num1, num2 = 5){
    return num1 + num2;
}
const t = add(45)
console.log(t)
