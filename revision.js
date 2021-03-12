//for...in 


// let myFriends = ["Rishav","Shivam","Rahul","Anish","Gyan"];
// for (let friend in myFriends){
//     console.log(friend);
// }



//for...of

// let myNames = ["Rishav","Dhooni", "Raj"];
// for(let names of myNames){
//     console.log(names);
// }

//forEach()

// var myNames = ["Rishav", 'kaku', "Dhooni"];
// myNames.forEach((element,index,array)=>{
//    console.log(`${element}`);
// });


//indexOf()

// let myNames = ["Rishav", "Raj", "Dhooni", "Rish", "Dhooni"];
// console.log(myNames.indexOf("Dhooni", 0));


//lastIndexOf()

// let myNames = ["Rishav", "Dhooni", "Raj", "Rish", "Rishav"];
// console.log(myNames.lastIndexOf("Rishav",3));


//includes()

// let myNames = ["Rishav", "Dhooni", "Raj", "Rish", "Rishav"];
// console.log(myNames.includes("Raj"));


//find()

// const prices = [200,300,500,250,10,1000,600];
// const findElem = console.log(prices.find((currVal)=>currVal>400));


//findIndex()

// const prices = [200,300,500,250,10,1000,600];
// const findElem = console.log(prices.findIndex((currVal)=>currVal>400));


//filter

// const prices = [200,300,500,250,10,1000,600];
// const findElem = console.log(prices.filter((currVal)=>currVal>400));
//GFG,BIT-D

// let a1 = ["1","2", "3","4","5","6"];
// let a2 = ["1", "2", "3", "5"];

// console.log(a1.filter(e=>!a2.includes(e))); 

//Solutions

//filter() make a new array with the elements the pass truly by given condition.
//includes() check the value that are present in array or not.
//Here, you See
//a1.filter make a new array where the condition said that to print all the values of a1 is not present in a2.


//pop()
// const plants = ["hello","bello","huol"]
// console.log(plants.unshift("Gg"));
// console.log(plants); 