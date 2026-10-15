//Variable and data Type - 5 Question

//1.
/*var a="Mathi";
var a="Elango";
a="Mk";
console.log(a);

let name="Mathi";
//let name="Elango";
name="Mk";
console.log(name);

const country="Mathiyazhagan";
//country="Mathikeerthi";
console.log(country);*/

//2.
/*let name="Mathiyazhagan";
let age=25;
let programinglanguage="Fulldstack web developer";

console.log(name);
console.log(typeof name);

console.log(age);
console.log(typeof age);

console.log(programinglanguage);
console.log(typeof programinglanguage);*/

//3.
/*let fruits =["apple","orange","bannana","mango","grape"]
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
console.log(fruits[fruits.length-3]);*/

//4.
/*let student = {
    name: "mathi",
 role: "Fullstack Developer",
cgpa:6.7
};

console.log(student.name);
console.log(student.role);
console.log(student.cgpa);*/

//5.
/*let username=prompt("Enter your name");
let userage=prompt("enter your age");

alert("welcome"+username);
alert("this is your age"+userage);*/


//operators
//1.
/*var a=12;
var b=4;
console.log("Addition",a+b);
console.log("subration",a-b);
console.log("Multipication",a*b);
console.log("division",a/b);
console.log("Modulas",a%b);
console.log("exponentiation",a**b);*/

//2.
/*let a = 5;
console.log(a++);
console.log(a);
console.log(++a);*/

//3.
/*let a = 10;
let b = a--;
let c = --a;

console.log(a);
console.log(b);
console.log(c);*/

//4.
/*var a=20;
a+=4;
console.log(a);
a-=5;
console.log(a);
a*=2;
console.log(a);
a/=3;
console.log(a);
a%=2;
console.log(a)*/

//5.
/*console.log(5 == "5");
console.log(5 === "5");
console.log(10 != "10");
console.log(10 !== "10");*/

//6.
/*let age=25;
console.log(age>=18 && age>=27);
console.log(age>=18 || age>=25);
console.log(!age<=18)*/

//Type Casting and Conditions-6
//1.
/*console.log(typeof ("hello" + 10));
console.log(typeof (10 + true));
console.log(typeof (10 + null));
console.log(typeof ("hello" + undefined));*/

//2.
/*let input=prompt("enter your number");
let number=Number(input);
let result=number+10;
console.log("orginal number",number);
console.log("After adding",result);*/

//3.
/*console.log( Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(true));*/

//4.
/*let num=15;
if (num>10)
    {
console.log("This Number is Positive");
}
else{
    console.log("This number is negative");
}*/

//5.

/*let time = Number(prompt("Enter the hour (0-23):"));

if (time < 0 || time >= 24 || !Number.isInteger(time)) {
    console.log("Invalid time");
}
else if (time >= 4 && time < 6) {
    console.log("This is Early Morning");
}
else if (time >= 6 && time < 12) {
    console.log("Good Morning");
}
else if (time >= 12 && time < 16) {
    console.log("Good Afternoon");
}
else if (time >= 16 && time < 20) {
    console.log("Good Evening");
}
else {
    console.log("Good Night");
}*/


//6.

/*let age = 25;
let height = 175;
let weight = 65;

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("You are eligible.");
        } else {
            console.log("You are not eligible: Weight is too low.");
        }
    } else {
        console.log("You are not eligible: Height is too low.");
    }
} else {
    console.log("You are not eligible: Age is below 18.");
}*/

//loops Statement
//1.

/*let color = prompt("Enter traffic light color:");

switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light color");
}*/

//2.

for (let i = 1; i <= 20;i++) {
    console.log(i);
}

//3.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//4.


/*let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}*/

//5.

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 10);

//6.

let text = "JavaScript";

for (let character of text) {
    console.log(character);
}











