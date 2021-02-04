const students = [
    {id: 21, name: 'Fahad'},
    {id: 22, name: 'Yeasin'},
    {id: 23, name: 'Arafat'},
    {id: 44, name: 'Shuvro'},
]
const names = students.map( s => s.name);
const ids = students.map(s =>s.id)
const bigger = students.filter(s => s.id>40);
console.log(bigger);