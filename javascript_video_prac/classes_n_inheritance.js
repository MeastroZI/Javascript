console.log("lets learn the clsses")

class Employee {
    constructor(name, XP, division) {
        this.name = name;
        this.experience = XP;
        this.division = division
    }
    slogan() {
        return `I am ${this.name} & lets start learning javascript`
    }
    joiningYear() {
        return 2020 - this.experience
    }

    static add(a, b) //we dont need to call it by  using object we can directly call it by class name because we dont using the any element of the constructor
    {
        return a + b;
    }
}

vinit = new Employee("vinit", "2", "A9");
// console.log(vinit.joiningYear());
//console.log(Employee.add(52, 77))

//we can inherit the class Employee in programmer class like this

class programmer extends Employee {
    constructor(name, XP, division, language, YRcollege) {
        super(name, XP, division) // this will call the  constructor inherit class for the enterd parameters
        this.language = language;
        this.college = YRcollege
    }

    favoriteLanguage() {

        return `fav langauge is ${this.language}`

    }

    static mult(a,b)
    {
        return a*b;
    }
}

gautam = new programmer('gautam' , 3,"A9","python","pataNahi")
console.log(gautam)
//console.log(programmer.mult(5,4)) // we can use the mult as it because it is the static