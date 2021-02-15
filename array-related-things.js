const numbers = [2,4,5,7,5];
const friends = ['Rafiq', 'Jababr', 'Barkat'];
const products = [
    {id:1, name:'laptop', price:500},
    {id:2, name:'Phone', price:100},
    {id:3, name:'Watch', price:20},
    {id:4, name:'Tablet', price:80},
];

//map 

const names =products.map(products=> products.name)
const price=products.map(pd=>pd.price)

const prices2 = products.map(pd=>{
    return pd.price
})

console.log(names)
console.log(price)

//forEach

products.forEach(product=> console.log(product.name))


//filter

const cheaper = products.filter(pd => pd.price<100);
console.log(cheaper)

//remove an item using filter

const remaining = products.filter(pd => pd.id!=3);
console.log(remaining);

const hasWatch = products.find(pd=> pd.name ==='Watch')
console.log(hasWatch)