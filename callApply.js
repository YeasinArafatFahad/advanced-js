const normalPerson = {
firstName:"fahad",
lastName:'Arafat',
salary:15000,
getFullName: function(){
    console.log(this.firstName, this.lastName);
},
chargeBill:function(amount){
    this.salary = this.salary - amount;
    return this.salary;
}
}
normalPerson.chargeBill(150)
normalPerson.chargeBill(2000)
console.log(normalPerson.salary)