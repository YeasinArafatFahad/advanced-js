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

    const heroPerson ={
        firstName:'Yeasin',
        lastName:"yaf",
        salary:25000
    }
    const friendlyPerson ={
        firstName:'Yeasin',
        lastName:"yaf",
        salary:30000
    }

const heroBillCharge= normalPerson.chargeBill.bind(heroPerson)
const friendlyCharge = normalPerson.chargeBill.bind(friendlyPerson)
heroBillCharge(2000)
friendlyCharge(3000)

console.log(heroPerson.salary)
console.log(friendlyPerson.salary)
console.log(normalPerson.salary)