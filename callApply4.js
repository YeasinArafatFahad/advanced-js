const normalPerson = {
    firstName:"fahad",
    lastName:'Arafat',
    salary:15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount, tips,tax){
        this.salary = this.salary - amount - tips-tax;
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


normalPerson.chargeBill.apply(heroPerson,[3000,1000,500])
normalPerson.chargeBill.apply(friendlyPerson,[2000,2000,3000])
console.log(heroPerson.salary);
console.log(friendlyPerson.salary);