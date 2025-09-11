// loops in js  3 luctire



// for (let i = 1 ; i <= 10 ; i++){
//     console.log("hello world")
// }
// let sum = 0;
// for (let i =1; i <= 10 ; i++){
//     sum = sum +i;
// }
// console.log("sum =", sum);
// let sum = 10;
// let n = 100;
// for (let i = 1 ; i <= n ; i++){
//     sum = sum +i ;
// }
// console.log("sum =", sum);

// while loop in js

// let i = 1;
// while( i <= 10){
//     console.log(" i =", i);
//     i++;
// }

// let i = 1;
// while ( i <= 10){
//     console.log("i =", i)
//     i++;
// }


// do while loop


// let i = 1;
// do{
//     console.log( "hello everone i'm from afg");
//     i++;
// }while(i <= 10);



// for of loop 


// let src = "afghanistan";
// let linght = 0;
// for(let i of src){
//     console.log( " i =", i);
//     linght++;
// };
// console.log("linght =", linght)


// for in loop


// let student = {
//     name : "ali khan",
//     number : 20,
//     ispass: true,
// }
// for( let key in student){
//     console.log("key = ", key , student[key]);
// }

// Quistion one 


// for(let num = 0; num <= 100 ; num++){
//     if(num % 2 === 0)
//         console.log("num =", num)
// }

// for (let num = 0 ; num <= 100; num++){
//     if(num % 2 !==0)
//         console.log("num =", num)
// }
// Quistion number to 

// let gamenumber= 20;
// let usernum= prompt("Enter the right number");
// while(gamenumber != usernum){
//     usernum = prompt("you entered the woring number guass again")
// }
// console.log("conguratulation you guass the right number")

// let winnum= 29;
// let usernum= prompt("guass the win number")
// while(winnum != usernum){
//     usernum= prompt("you enter the woring number guass again")
//     console.log( "usernum = ", usernum)
// }
// console.log("conguratulation you guass the right number")




// templet literals

// let obj={
//     item :"pen",
//     price: 10,
// }
// console.log("the cast of ", obj.item ,"is ",obj.price,"rupees")



// we use \n for next line
// we use  \t  ti add the tabe 

//string metod in js

// let str = "afghanistan";
// str = str.toUpperCase();

// trim metod is use to  remove  the start and the end space

// let afg = " afg        hinstan   kabul  ";
// console.log(afg.trim())

// we use it to return a part of string

// let str = "afghanistan";
// console.log(str.slice(3 , 8))

// we use it to connict the two and more the two string // we can also use + for concat

// let str1 = "hello";
// let str2 = "buy";
// let resu = str1.concat( " ",str2);
// console.log(resu)

// we can use replace metod to change content of a string 

// let num = "hello";
// console.log(num.replace("h","y"))


// we can use charAt metod for define the number of index

// let num = "hello";
// console.log(num.charAt(4))

// Quistion one 

// let fullName= prompt("Enter your fullname whitout space")
// let username = "@" + fullName + fullName.length ;
// console.log(username)






// array in js 

// let num= [
//     {name: "ali",
//     number: 32,
//     }
// ]

// let name = [98, 91, 84, 80,70,60]
// for(let ind = 0; ind < name.length; ind++){
//     console.log("index =", name[ind])
// }


// let cetiy=["kabul","mazar","bamyan","logar","herat",]
// for(let place of cetiy){
//     console.log(place);
// }
// let cetiy=["kabul","mazar","bamyan","logar","herat",]
// for(let i of cetiy){
//     console.log(i)
// }
 
//Quiction number one

// let num = [98, 91, 84, 80,70,60];

// let sum = 0;

// for(let val of num){
//     sum += val;
// }

// let avg = sum / num.length;
// console.log("avg of class is = ", avg)

//  let num = [98, 91, 84, 80,70,60];
//  let sum = 0;
//  for(let val of num){
//     sum += val;
//  }
//  let avg = sum / num.length;
//  console.log(`avrage of class is = ${avg}`)


// Quistion number two

// let items = [290,300, 222, 400,390,800,500,600];
// for(let i = 0 ; i < items.length ; i++){
//    let offer = items[i] / 10;
//    items[i] -= offer;
// }


// console.log(items);
// let items = [290,300, 222, 400,390,800,500,600];
// for(let i = 0 ; i < items.length ; i++){
//    let offer = items[i] / 10;
//    items[i] -= offer;
// }
// console.log(items)

// push metod in js the are added the items in the ind of array

// let items = ["apple","mango","banana","orange","patato","tomato","painapple","grapes","kivi"]

// items.push("mana","juse");

// console.log(items);

// pop metod in js the remove item from the ind of array

// let items = ["apple","mango","banana","orange","patato","tomato","painapple","grapes","kivi"]
// items.pop();
// console.log(items);



// tostring we use it to convert everting in to string

// let items = [32,32,43,45,56,76,78,98,87,676,545,];
// console.log("befor change it to string",items)

// items.toString()
// console.log(items);


/// we use unshift metod to add item in the start of array

// let items = ["mango","potato","apple","banana","orange",];

// items.unshift("kivi","grapes");

// console.log(items);



// shift metod is use to remove item from the start of array

// let items = ["mango","potato","apple","banana","orange",];

// let length = items.shift();

// console.log(length);




/// slice metod is use to return a part of array like return a  pice of cake

// let Hero = ["ahmad","khan","afghan","rahman","ali","nawroz",];
//                   // str indx // end indx
// let part =  Hero.slice(1,           5);
// console.log(part);



//splice metod is use to add  , delete and replace elements in an array

// let Hero = ["ahmad","khan","afghan","rahman","ali","nawroz",];
//              // start indx // delete count // item to add
// let Khan = Hero.splice(1, 2, "sami","sajid");
// console.log(Khan);




//  Quistion number one 

// delet items in the start of array

// let companies = ["google","apple","meta","microsoft","tesla","amazon",];
// companies.shift();

// console.log(companies);

//  // instade of meta replace netflix , adobe 

// let campanies = ["google","apple","meta","microsoft","tesla","amazon",];

// campanies.splice(2,1,"netflix","adobe");
// console.log(campanies);

// /// add the uber in the end of array

// let cempanies = ["google","apple","meta","microsoft","tesla","amazon",];

// cempanies.push("uber");
// console.log(cempanies);




/// learning function in js

// function Create(){
//     console.log("hello world");
//     console.log("hello afghanistan");
// }

// Create();


//  arrow function in js 

// const arrow = (a , b) => {
//     return a * b;
// }
// arrow(10, 20);

// Quistion number one 



// function vowelCount(str){
//     let count = 0;
//     for(let char of str){
//         if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// vowelCount("afghanistan");

//use arrow function 

// const vowel = (str) => {
//    let count = 0;
//    for(let char of str){
//        if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
//            count++;
//        }
//    }
//    console.log(count);
// }
// vowel("afghanistan");

// forEach loops in js

// let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach(function print(val){
//     console.log(val);
// })


// let arr = ["kabul","kandahar","herat","mazar"];
// arr.forEach((val , ind , arr) => {
//     console.log(val.toUpperCase() , ind , arr);
// })

// Quistion number one 

// let num = [2,3,4,5,6,7,8,9];
// num.forEach((you) =>{
//     console.log(you * you);
// })

//map metod in js

// let num = [33,44,55,66,77,88,99];

// let newarry = num.map((afg) => {
//     return afg * afg;
// });
// console.log(newarry);

// filter metod in js  

// let num = [2,3,4,5,6,7,8,8,9,98,76,56,45,34,23];
// let newarry = num.filter((afg) => {
//     return afg % 2 === 0;
// })
// console.log(newarry);


//reduce metod in js

// let num = [1,2,3,4];
// let newnum = num.reduce((afg , pak)=>{
//     return afg + pak;
// });
// console.log(newnum);

// let num = [1,2,3,4,23,43,55,100];
// let newnum = num.reduce((afg , pak)=>{
//     return afg > pak ? afg : pak ;  
// });
// console.log(newnum)

// Quistion number one 

// let mark = [80, 90, 70, 60, 85, 92, 93, 95, 98, 99 , 65];

// let topper = mark.filter((afg) => {
//     return afg > 90;
// });
// console.log(topper);

// Quistion number two 

// let n = prompt("enter a number that you gass :")
// let arr = [];
// for(let i = 1; i <= n ; i++){
//     arr[i - 1] = i;
// }
// console.log(arr);

// let sumof = arr.reduce((red , gree)=>{
//     return red + gree;
// });
// console.log(sumof);

// let factorial = arr.reduce((red , gree)=>{
//     return red * gree;
// });
// console.log("factorial  = ",factorial);



//window object that represents the browser window
// console.log(window);


//Dom manipulation in js 


// let newpara = document.getElementById("parag").innerHTML = "new content for the paragraph";
// console.log(newpara);
// let newtitle = document.getElementsByClassName("title")[0].innerHTML = "new title for website";
// console.log(newtitle);
// let btn = document.getElementsByTagName("button")[0].innerHTML = "new btn";
// console.log(btn);

// let firstEl = document.querySelector("p");
// console.dir(firstEl.tagName);

// let allEl = document.querySelectorAll("p");
// console.log(allEl);

// let body = document.body.innerHTML = "<h1>new content for body</h1>";

// we can use also textContent that the show us the hidden text

// Qustion number one 

// let concat = document.querySelector("p").innerText;
// console.log(concat + "hello from afg");

// let divs = document.querySelectorAll(".box");

// divs[0].innerText = "for div one";
// divs[1].innerText = "for div two";
// divs[2].innerText = "for div three";

// let divs = document.querySelectorAll(".box");
// let idx = 1; 
// for(let div of divs){
//     div.innerText = `make it just for test ${idx}`;
//     idx++;
// }

// git attribute in js   

// let div = document.querySelector("div");
// console.log(div)
// let classdiv = div.setAttribute("id");
// console.log(classdiv);

// let par = document.querySelector("p");
// let clas = par.getAttribute("class");
// console.log(clas);


// let per= document.querySelector("p");
// console.log(per.setAttribute("box" , "new"));

// let sty = document.querySelector("div");
// sty.style.backgroundColor = "red";
// sty.style.color = "white";
// sty.style.padding = "20px";
// sty.style.textAlign = "center";



// insert  Element in js




// adds at the end of the node (inside)

// let btn = document.createElement("button");
// btn.innerText = "cleck me!";
// let div = document.querySelector("div");
// div.append(btn);




// adds at the start of the node (inside)

// let btn = document.createElement("button");
// btn.innerText = "cleck me!";
// let div = document.querySelector("div");
// div.prepend(btn);




// adds before the node (outside) 

// let btn = document.createElement("button");
// btn.innerText = "cleck me!";
// let div = document.querySelector("div");
// div.before(btn);




// adds after the node (outside)

// let btn = document.createElement("button");
// btn.innerText = "cleck me!";
// let div = document.querySelector("div");
// div.after(btn);



// let head = document.createElement("h1");
// head.innerText = "hi i am from afg";
// document.querySelector("body").append(head);


// remove Element in js 


// let per =  document.querySelector("p");
// per.remove();


// first Quistion 


// let btn = document.createElement("button");
// btn.innerText = "cleck me!";
// btn.style.color ="white";
// btn.style.backgroundColor = "red";
// btn.style.padding = "10px 20px";
// document.querySelector("body").prepend(btn);


// second Quistion

// if you want to replace the class in the p tag


// let par = document.querySelector("p");
// par.setAttribute("class","newclass");



// if you want to add more class in the p tag at the same time 

// let par = document.querySelector("p");
// par.classList.add("newclass");



// if you want to remove the class 

// let par = document.querySelector("p");
// par.classList.remove("newclass");


// let btn = document.querySelector("button");
// btn.onclick = () => {
//     console.log("the was clisked for the function way");
//     let a = 23;
//     a++;
//     console.log(a)
// };


// let div = document.querySelectorAll("#box");
// div[0].onmouseover = () => {
//     console.log("you are hover the box");
// }




// let btn = document.querySelector("button");

// btn.addEventListener("click", ()=> {
//     console.log(" this is add event listener metod");
// })

let btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    console.log("this massage sayes hi from afg ")
})