console.log("lets learn object oriantation programing with javascript")


//this is object litral
let car = {
    name : "Audio",
    toopspeed : 150,
    run: function (){
        console.log("car is running")
    }
}


// creating the constructor

function GeneralCar(name,speed)
{
    this.name =name // this is the constructor which the assing the value form the function call to the the object we created 
    this.toopspeed=speed
    this.run = function(){
        console.log(`${name} is running`)
    }
}
car1 = new GeneralCar('BMW' ,  180)
console.log(car1)