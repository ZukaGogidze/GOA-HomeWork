let myGivenName = "  Sandro  ";

console.log(myGivenName.toUpperCase());
console.log(myGivenName.toLowerCase());

let trimmedName = myGivenName.trim();
console.log(trimmedName);

console.log(trimmedName.indexOf("a"));
console.log(trimmedName.slice(0, 4));
console.log(trimmedName.replace("Sandro", "Dato"));
console.log(trimmedName.length);


let randomNumber = Math.floor(Math.random() * 102);
console.log(randomNumber);

// let გამოიყენება ისეთი ცვლადების შესაქმნელად, რომელთა მნიშვნელობაც კოდის მუშაობის პროცესში შეიძლება შეიცვალო

let myNumber = 10;

myNumber++;
console.log(myNumber); 

myNumber--;
console.log(myNumber);


let myName = "Giorgi";
let myAge = 25;
let myHobby = "coding";

let sentence = `Hello my name is ${myName}, i am ${myAge} years old and my hobby is ${myHobby}.`;
console.log(sentence);

let x = 20;

x += 5;   
x -= 10;  
x *= 2;   
x /= 3;   
x %= 4;   
x **= 3;  

console.log(x);

x += 5;   
x -= 10;  
x *= 2;   
x /= 3;   
x %= 4;   
x **= 3;  

console.log(x);

//ცვლადები შეგვიძლია წარმოვიდგინოთ, როგორც ყუთები ან კონტეინერები, რომლებსაც ვარქმევთ სახელს და შიგნით ვინახავთ ინფორმაციას (რიცხვებს, ტექსტებს, სიებს). ისინი გვჭირდება იმისთვის, რომ კოდის წერისას ეს ინფორმაცია დავიმახსოვროთ და პროგრამის სხვადასხვა ნაწილში გამოვიყენოთ ან შევცვალოთ.