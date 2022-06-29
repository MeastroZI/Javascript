console.log("lets lern the prototype inheritance")

const proto = {
    slogon: function(){
        return `come out from your comfortzone`
    },
    changeName : function(newName){
        this.name = newName
    }
}

// this will creat the object using object

/*const vinit = Object.create(proto);
vinit.name = "vinit"
vinit.role = "learning javascript";
vinit.changeName("vinit sharma")*/

// this is the another way to creat the object 
// but this is old syntex so therefor it is littlebit tough
const vinit = Object.create(proto, {
    name:{value:"vinit" , writable:true},//we have to write the writable:true to make th element updateable
    role:{value:"learning javascript"},
})

vinit.changeName("vinit pandit")

// console.log(vinit)

//making Employee constructor
function Employee(name,salary,xp)
{
    this.name = name;
    this.salary=salary;
    this.experience=xp;
}

Employee.prototype.slogon=function(){
    return `come out from your comfortzone so work hard to grow fast name ${this.name}`
}
let vinit1 = new Employee("vinit" , "358654" , 87)

// console.log(vinit)
// now we make the another function and iherit the employe constructor init

function Programmer(name,salary,xp,language)
{
    Employee.call(this,name,salary,xp);//we inherit the Employee in the programer constructor 
    this.language =language;

}
// but we this will not inherit the prototype of the Employee constructor to u can  do this like this 

Programmer.prototype=Object.create(Employee.prototype)
// this will assing the value of the prototype of the employee to the programer


// manully set the constructor
Programmer.prototype.constructor = Programmer

let gautam = new Programmer("gautam", 18888888,0,"javascript")
console.log(gautam)
