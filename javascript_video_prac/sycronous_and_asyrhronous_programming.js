// sycronus programing is the normal programing in which servers the  all files(or do process) one by one

// in asynchronous programing the server serve the all files symultanously means it first start the process for the serve 1st file and run the process in background and then at same time start the process for the another services(means like ye kaam ho raaha he chalo dosra start karte he)

// console.log('lets learn the asynchronous programing')

// for (let index = 0; index < 4004; index++) {
//     const element = index;
//     console.log('This is index number ', + index)

// }
// console.log('done printing') 
// so this programing run one by  one and done printing is print after printing the all the index so this is sycronous


setTimeout(() => {
    console.log('lets learn the asynchronous programing')

    for (let index = 0; index < 4004; index++) {
        const element = index;
        console.log('This is index number ', + index)

    }
    
}, 100);
console.log('done printing')
//in this code done printing is write first and then it will print the index