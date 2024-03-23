/*
=> Data types
=>variables and typeof
=>Date
=>loops
=>Conditions
=>OP
=>indexing
=>Math
=>Object and Array
=>
=>
=>
=>

*/

// let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "jack"];
// console.log(names);
// console.log(names.length); // it will give you lenght
// console.log(names[3]);
// console.log(names[names.length - 1]);

// names[4] = "vinay";
// console.log(names);

// one more way decleraing array

// let namess = new Array("Name 1", "Name 2"); // way of declaring array not recommded
// console.log(namess);

//Push ==> insert new values inside the array
// names.push("Sunny");
// console.log(names);

// Slice
// let a = ["a", "b", "c", "d", "e", "f", "g"];
// console.log(names.slice(1, 6));

// Splice
// let fruits = ["Apple", "Bada Apple", "Chota Apple", "Double Apple"];
// fruits.splice(2, 0, "Kharab Apple", "Achha Apple");
// console.log(fruits);

//Concatenation

//to connect two things

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let arr3 = [9, 10];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2, arr3));

// Fill

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr4.fill("yuvraj", 2, 4); // fill the 'yuvraj' names of index 2 and 4
console.log(arr4);
