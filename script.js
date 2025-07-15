// function Change() {
//   let h1 = document.querySelector("#text");
//   let bt = document.querySelector("#btn");
//   let sec = document.querySelector("#section");
//   h1.style.color = "white";
//   sec.style.backgroundColor = "black";
//   bt.style.display = "none";
//   let jj = document.querySelector("#ji");
//   jj.style.display = "block";
// }

function Change() {
  document.documentElement.classList.toggle("dark");
}

// function sayHello(name) {
//   console.log("Hello", name);
// }
// sayHello(prompt("enter ur name pls"));

const showMain = () => {
  document.getElementById("mainContent").classList.remove("hidden");
  document.getElementById("mainContent").classList.add("block");

  document.getElementById("secondContent").classList.remove("block");
  document.getElementById("secondContent").classList.add("hidden");
};

const showSecond = () => {
  document.getElementById("secondContent").classList.remove("hidden");
  document.getElementById("secondContent").classList.add("block");

  document.getElementById("mainContent").classList.remove("block");
  document.getElementById("mainContent").classList.add("hidden");
};

//  function greet(name){console.log('hii',name)

//   }
//   console.log(greet('alice'))
// const greet = name => {return `hello , ${name}`;}
// console.log (greet('alice'))
// function sayHello(name){
//   console.log (`hello ,${name}`)
// }
// console.log (sayHello('alice'))

// function greet(callback){
// callback()
// }
// function sayHello(name){
//   console.log('hello',name)

// }

// greet(sayHello);

// let name = prompt("enter name");
// function sayHello(name) {
//   console.log("hello", name);
// }
// function greet(callback) {
//   callback();
// }
// greet(function () {
//   sayHello(name);
// });

// let num = prompt('enter num pls')
// if (num %2===0){
//   console.log
//   ('its even')
// }else {console.log('its odd')}

// let num = prompt('enter pls')
// if (num>0){console.log('its positive')}
// else if (num<0){console.log('its negative')}
// else{console.log('its zero man')}

// let age = prompt('enter age pls')
// if (age >18){console.log('u can vote')}
// else if (age <18){console.log('u cant vote')}
// else {console.log('u can vote')}

// let a = prompt("enter num a");
// let b = prompt("enter num b");
// let c = prompt("enter num c");
// if (a >= b && a >= c) {
//   console.log("A is biggest");
// }
// if (b >= a && b >= c) {
//   console.log("B is biggest");
// }
// if (c >= a && c >= b) {
//   console.log("C is biggest");
// }

// let savedusername = 'ash37';
// let savedpassword = 'jaishreeram'

// let inputname = prompt('enter username pls')
// let inputpassword = prompt('enter password pls')

// if (savedusername===inputname && savedpassword===inputpassword){
//   console.log ('login succesfully')
// }
// else{console.log('login didnt successfull ')}

// let num = prompt("enter num pls");
// if (num == 1) {
//   console.log("one");
// } else if (num == 2) {
//   console.log("two");
// } else if (num == 3) {
//   console.log("three");
// } else if (num == 4) {
//   console.log("four");
// } else if (num == 5) {
//   console.log("five");
// } else {
//   console.log("out of range");
// }

// function add(x,y){
//   console.log (x+y)
// }
// add(Number(prompt('enter x')),Number(prompt('enter y')))

// function isEvenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
// isEvenOrOdd(Number(prompt("enter num pls")));

// function toFahrenheit(celsius){
//   console.log ((celsius * 9/5 )+32)
// }
// toFahrenheit(Number(prompt('ENTER UR LOCAL TEMP IN CELSIUS')))

// for (let i =1 ; i<=20; i+=2){
//   console.log(i)
// }

// let i =2
//   while(i<=20){
//     console.log(i);
//     i+=2;
//   }

// let i=10
// while(i>=1)
// {
//   console.log(i);
//   i--;
// }

// // let i =1
// // let n = 5

// // while(i<=n
// // ){console.log(i+=1)
// //   i++
// }

// let i =2
// while(i<=10 )
// {console.log(i)
//   i+=2
// }

// let i =5
// while(i>=1)
// {console.log(i)
//   i--
// }

// let i =0
// let sum = 0
// let n=10

// while(i<=n)
// {console.log(sum+=i)
//   i++
// }

// const xoos = 'hello'
// for( const fruit of xoos)
// {console.log(fruit)}

// const name =['ali','riya','rahul','ash']
//  for (const char of name){
//   console.log(char)
//  }

// const word ='chemistry'
// for(const char of word){
//   console.log(char)
// }

// let i =2
// while(i=10 )
// {console.log(i)
//   i+=2
// }

// const students = [
//   {name: 'ash' , score: 90},
//   {name: 'sneha' , score: 100},
//   {name: 'lucky' , score: 80}
// ]
// for (const student of students){
//   console.log (student.name,student.score)
// }

// const students = [
//   { name: "ash", score: 90 },
//   { name: "sneha", score: 100 },
//   { name: "lucky", score: 80 },
// ];
// for (const student of students) {
//   if (student.name === "sneha"){
//   break;}
//   console.log(student.name, student.score);
// }

//

// let a = 5;
// let b = 10;

// // Swap them
// let temp = a;
// a = b;
// b = temp;

// console.log(a, b); // 10, 5

// let num =Number(prompt('Enter number pls'))
// if(num>=0){console.log('positive')}
//   else if(num<=0){console.log('negative')}
// else{console.log('zero')}

// let i =1;
// while(i<=5)
// {console.log(i)
//   i++
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let i = 2;
// while (i <= 10) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// const names = ["rahul", "ash", "sneha"];
// for (const name of names) {
//   console.log(name);
// }

// const numbers =[1,2,3,4,5]
// let sum =0

//  for(const num of numbers){
// sum +=num;
//  }
//  console.log('sum',sum)

// function add(x,y){console.log(x+y)}
// add(5,6)

// function isEven(n){if (n%2===0){console.log('even')}}
// isEven (Number(prompt('enter n pls')))

// const person = {
//   name: "ash",
//   age: 25,
//   city: "raipur",
// };
// for (const x in person) {
//   console.log(person.name, person.age, person.city);
// }

// const users=[
//   {name:'ash',age:20},
//     {name:'omi',age:25},
//   {name:'alex',age:30}

// ]
// for(const x of users){if (x.name==='omi' && x.age===25){break;}
//   console.log(x.name,x.age)
// }