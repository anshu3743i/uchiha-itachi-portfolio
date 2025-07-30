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
// function startGame(playerGuess) {
//   const randomNumber = Math.floor(Math.random() * 10) + 1;

//   console.log("Computer picked:", randomNumber);
//   console.log("You guessed:", playerGuess);

//   if (playerGuess === randomNumber) {
//     console.log("🎉 Correct! You win!");
//   } else {
//     console.log("❌ Wrong! Try again.");
//   }
// }

// // Example guesses:
// startGame(9); // change this number to test

// const students = ['alice','ash','snehaa']

// for (const x in students){console.log(students[x])}

// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 28 }
// ];
// for(const user of users){console.log(user.name)}

// const products = [
//   { id: 1, name: "Pen", price: 10 },
//   { id: 2, name: "Notebook", price: 20 }
// ];
// for(const  product of products ){
//   let after ={ priceWithTax: product.price * 1.18}
//   console.log(product.name ,after)
// }

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 5000);

// setTimeout(() => {
//   console.log("hellow world");
// }, 5000);

// function greet (name){
//   setTimeout(() =>{console.log('hello', name)},3000)}
// greet('ash')

// console.log("start coundown");
// setTimeout(() => {
//   console.log("countdown 1");
// }, 1000),
//   setTimeout(() => {
//     console.log("countdown 2");
//   }, 2000),
//   setTimeout(() => {
//     console.log("countdown 3");
//   }, 3000),
//   setTimeout(() => {
//     console.log("countdown 4");
//   }, 4000),
//   setTimeout(() => {
//     console.log("countdown 5");
//   }, 5000);

// for (let i=1;i<=5;i++){
//   setTimeout(()=>{console.log(i)},i*2000)

// }

// function greet (name , callback){
//   setTimeout(() => {console.log('hello',name)
//     callback();
//   },2000);
// }
// greet ('ash',()=>{console.log('greeting finished!')})

// let hero = {
//   calcTax() {
//     console.log("hero time");
//   },
// };
// // console.log(hero.calcTax)

// let emp1 = {
//   salary: 10000,
// };

// emp1.__proto__ = hero;

// let users = {
//   name: "ash",
//   callback(name) {

//     console.log("hello world", name);
//   },
// };

// let rahul = {
//   name: "rhl",
// };
// rahul.__proto__ = users;

// console.log(rahul.callback());

// class Person {
//   constructor(name, studentClass, income) {
//     this.name = name;
//     this.studentClass = studentClass;
//     this.income = income;
//   }
// }
// class Aman {
//   constructor() {
//     this.name = 'Uday';
//     this.studentClass = '4th year';
//     this.income = 50;
//   }
// }
// let alex = new Aman();
// console.log(alex.name);         // Uday
// console.log(alex.studentClass); // 4th year
// console.log(alex.income);       // 50

// class person {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
// }
// let p1 = new person("ash", 40);
// console.log(p1);

// class student {
//   constructor(name, marks,acheivement) {
//     (this.name = name), (this.marks = marks),(this.acheivement=acheivement);
//   }
//   grades() {
//     if (this.marks >= 80) {
//       console.log("A grade");
//     } else if (marks >= 60) {
//       console.log("B grade");
//     } else {
//       console.log("C grade");
//     }
//   }
// }

// class acheivement{constructor(sport,fashion){
//   this.sport='gold',
//   this.fashion='silver'
// }}

// let rahul = new student("rahul", 84,);
// console.log(rahul, rahul.grades());

// function greet(name, callback) {
//   console.log("hello", name), callback();
// }
// function sayBye() {
//   console.log("bye");
// }
// greet("rahul", sayBye);

// function sayHello(name, callback) {
//   console.log("hello",name);
//   callback()
// }
// function greet() {
//   console.log("Welcome to Node.js!");
// }
// sayHello('rahul',greet)

// let str = 'aishwary'
// console.log(str.toLocaleUpperCase())

// function sayHello(callback){
//   console.log('hello man')
//   callback()
// }
// function sayBye(){
//   console.log('bye man')
// }
// sayHello(sayBye)

// function add(a,b,callback)
// {result = a+b;
//   callback(result)
// }
// function state(){
//   console.log('ur result is',result)
// }
// add(5,5,state)

// function add(a, b, callback) {
//   let sum = a + b;
//   callback(sum); // pass result to callback
// }

// function display(sum) {
//   console.log("Result:", sum);
// }

// add(3, 7, display);function fetchData(callback) {

// function fetchData(callback) {
//   console.log("Fetching data...");
//   setTimeout(() => {
//     callback('xyz');
//   }, 2000);
// }
// fetchData(function(xyz) {  console.log(xyz);

// });

// function checkNumber(num, evencallback, oddcallback) {
//   if (num % 2 === 0) {
//     evencallback();
//   } else {
//     oddcallback();
//   }
// }
// checkNumber(
//   7,
//   () => console.log("even"),
//   () => console.log("odd")
// );

// function add(a, b, callback) {
//   const result = a + b;
//   callback(result);
// }

// add(4, 5, (result) => {
//   console.log('Sum is:', result);
// });

// function result (name,marks,callback){
//   console.log(name,marks)
//   callback()
// }
// function royal(){console.log('7th')
// }
// result('ash',55,royal)

// function evalu(name, marks, className, callback) {
//   console.log("evaluating result..");
//   setTimeout(() => {
//     if (marks >= 50) {
//       console.log("pass", "good job");
//     } else {
//       console.log("fail", "better luck next time");
//     }
//   }, 1000);
//   callback(name, marks, className);
// }
// function cc(name,marks,className) {
//   console.log("ur reuslt ", marks);
//   console.log(className);
//   setTimeout(() => {
//     console.log("bye bye");
//   }, 2000);
// }
// evalu("ash", 40, "7th", cc);

// function fam(surname, caste, religion, callback) {

//    surname = "sinha";
//   console.log(surname);

//    caste = "kalar";
//   console.log(caste);

//   callback(religion);
// }

// function cc(religion) {
//    religion = religion || "um";
//   console.log(religion);
// }
// fam("", "", "", cc);

// function greet(name, city, callback) {
//   name = "ash";
//   console.log(name);
//   setTimeout(() => {
//     console.log("hey there");
//   }, 2000);
//   city = "raipur";
//   console.log(city);
//   callback(name);
// }
// function sayBye(name) {
//   setTimeout(() => {
//     console.log("bye bye", name);
//   }, 4000);
// }
// greet("", "", sayBye);

// function friend(name,clas,trip,callback){
//   console.log('this is our friends biodata')
//   setTimeout(() => {name='alex'
//     console.log(name)

//   }, 2000);
//   clas='3rd year'
//   console.log(clas)
//   callback(trip)
// }
// function cc(trip){
//   console.log('we have been everywhere')
// }
// friend("","","",cc)

// function res(name, marks, callback) {
//   console.log("evaluatinf result pls wait");
//   setTimeout(() => {
//     name = "sara";
//     console.log(name);
//   }, 2000);
//   setTimeout(() => {
//     if (marks >= 80) {
//       callback(marks, name,"pass");
//     } else {
//       callback(marks,name, "fail");
//     }
//   }, 3000);
// }
// function cc(marks,name, status) {
//   console.log("result for ",name, status);
// }
// res("", 83, cc);

// function ide(name,className,occupation,callback){
//   setTimeout(() => {
//       name='rahul'
//     console.log('hello',name)
//     }, 2000);callback(className,occupation)
// }
// function cc(className,occupation){
//   className='roudy'
//   console.log(className)
//   occupation = 'hero'
//   console.log(occupation)
// }
// ide("","","",cc)
// ...............................................

// let promise = new Promise((resolve,reject)=>{console.log('i m promise')
//   resolve('success')
// // reject('some error occured')
// // resolve(123)
// })

// function getData(dataid) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataid);
//       resolve("success");
//       // if (getNextdata) {
//       //   getNextdata();
//       // }
//     }, 5000);
//   });
// }

// getData(1, () => {
//   console.log("getting data 2");
//   getData(2,()=>{ console.log("getting data 3")});
// });

// getData(1)
// .then((id)=>{
//   console.log('getting data 2')
//   return getData(2)
// })
// .then((id)=>{console.log('getting data 3')
//   return getData (3)
// })

// const mypromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("hello world");
//     resolve("success man");
//     // reject("error man");
//   });
// };
// mypromise()
//   .then((res) => {
//     console.log("promise fulfilled",res);
//   })
//   .catch((err) => {
//     console.log("rejected",err);
//   });

// function sks() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function vss() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 2");
//       resolve("success");
//     }, 4000);
//   });
// }
// console.log("fetching data 1...");
// sks().then((res) => {
//   console.log(res);
//   console.log("fetching data 2...");
//   vss().then((res) => {
//     console.log("fetching data 3");
//   });
// });

// function getData(dataid) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataid);
//       resolve("success");
//       // if (getNextdata) {
//       //   getNextdata();
//       // }
//     }, 5000);
//   });
// }
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//     getData(3).then((res)=>{console.log(res)})

//   });
// });

// function getData(dataid) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataid);
//       resolve("success");
//       // if (getNextdata) {
//       //   getNextdata();
//       // }
//     }, 2000);
//   });
// }
// getData(1)
//   .then((res) => {
//     console.log(res);
//     return getData(2);
//   })
//   .then((res) => {
//     console.log(res);
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// function getData(dataId){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log('data', dataId)
//       resolve('success')
//     }, 2000);
//   })
// }
// async function aryan(){
//   await getData(7)
//   console.log('getting data 8')
//   await getData(8)
//   console.log('getting data 10')
//   await getData(10)
// }
// aryan()

// function getData(dataId){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log('data', dataId)
//       resolve('success')
//     }, 2000);
//   })
// }
// (async function aryan(){
//   await getData(7)
//   console.log('getting data 8')
//   await getData(8)
//   console.log('getting data 10')
//   await getData(10)
// })();

// function wait() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {resolve('success')}, 2000);
//   });
// }
// async function royal() {let msg = await wait()
//   console.log(msg)
// }
// royal()

// const url = 'https://cat-fact.herokuapp.com'
// const getf = async ()=>{
//   console.log('getting data')
//   let response = await fetch (url)
//   console.log(response.status)
// }
// getf()



// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ username: "ash", userLastname: "sinha" });
//     }, 2000);
//   });
// }
// function userLocation() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ location: "raipur", locationid: "37" });
//     }, 2000);
//   });
// }
// function weather() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ tempreature: "37" });
//     }, 2000);
//   });
// }
// async function getWeather() {
//   console.log("getting username.....");
//   let msg = await getUser();
//   console.log(msg);
//   console.log("getting userlocation....");
//   let msg2 = await userLocation();
//   console.log(msg2);
//   console.log("getting userweather...");

//   let msg3 = await weather();
//   console.log(msg3);
//   console.log(
//     "hii",
//     msg.username,
//     msg.userLastname,
//     "!The weather in",
//     msg2.location,
//     "is",
//     msg3.tempreature,
//     "degree celcius"
//   );
// }
// getWeather();


