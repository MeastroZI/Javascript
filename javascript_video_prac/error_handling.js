console.log('lets learn about error handling')

try{
    //when i write something with wrong then it run the catch
    // in other way catch funtion catch the error and disply our customize message 
    
}catch(error){
    console.log("wrong syntex")
    console.log(error)// this will print the inbult error but in form of text
    console.log(error.name) // this will print the name of the error
    console.log(error.message)// this will print the messasge of the error

}// this try catch block is useful when we dont want to stop the program because of some error

finally{console.log("error is came or not but this finally block run definatly")}

console.log("console after the error")