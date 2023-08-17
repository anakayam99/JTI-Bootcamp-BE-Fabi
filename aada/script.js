// let fruits = ["Orange", "Apple","Grape", "Pineapple","Strawberry"];

// // add new fruits
// fruits.push("Khuldi")
// console.log(fruits)

// // order fruits by alphabhetical order
// fruits.sort()
// console.log(fruits)

// // Remove one fruits i don't like
// let disliked_fruits = fruits.splice(3,1)
// console.log(fruits)

// //Add a new fruit of your choosing to the front array 
// const fromIndex = fruits.indexOf("Khuldi");
// const toIndex = 0;

// const element = fruits.splice(fromIndex, 1)[0];

// fruits.splice(toIndex, 0, element)
// console.log(fruits)

function recursion(){
    recursion();
}
recursion();