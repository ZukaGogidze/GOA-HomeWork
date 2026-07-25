// 1) 
console.log("Hello");
console.log('JavaScript');
console.log(25);
console.log(3.14);
console.log(true);
console.log(false);
let a;
console.log(a);
console.log(undefined);
let b = null;
console.log(b);
console.log(null);

// 2) 
console.log(5 + 3);
console.log(10.5 + 4.5);
console.log(-2 + 7);
console.log(10 - 4);
console.log(0 - 5);
console.log(15.5 - 2.5);
console.log(20 / 4);
console.log(10 / 3);
console.log(100 / -5);
console.log(6 * 7);
console.log(-3 * 4);
console.log(0.5 * 10);
console.log(10 % 3); 
console.log(20 % 5); 
console.log(15 % 4); 

// 3) 
console.log(5 < 10);  
console.log(15 < 15); 
console.log(20 < 10); 
console.log(10 > 5);  
console.log(5 > 10);  
console.log(0 > -1);  
console.log(5 <= 10); 
console.log(15 <= 15);
console.log(20 <= 10);
console.log(10 >= 5); 
console.log(10 >= 10);
console.log(5 >= 10); 
console.log(5 == 5);   
console.log(5 == "5"); 
console.log(5 == 6);   
console.log(5 !== "5"); 
console.log(5 !== 6);   
console.log(5 !== 5);   

// 4) 
/*
== არა-მკაცრი ტოლობა ამოწმებს მხოლოდ მნიშვნელობებს. თუ ტიპები განსხვავებულია, JS ცდილობს მათ ერთი და იგივე ტიპზე დაყვანას. მაგალითად: 5 == "5" არის true.
=== მკაცრი ტოლობა ამოწმებს როგორც მნიშვნელობას, ისე ტიპს ავტომატური კონვერტაციის გარეშე. მაგალითად: 5 === "5" არის false.
*/

// 5) 
/*
let - გამოიყენება ცვლადის შესაქმნელად, რომლის მნიშვნელობაც მომავალში შეიძლება შეიცვალოს (reassignment).
const - გამოიყენება მუდმივი ცვლადის შესაქმნელად. სავალდებულოა საწყისი მნიშვნელობის მინიჭება და მისი შეცვლა შეუძლებელია.
*/

// 6) 
/*
Increment (++) - ნიშნავს ცვლადის მნიშვნელობის 1-ით გაზრდას.
Decrement (--) - ნიშნავს ცვლადის მნიშვნელობის 1-ით შემცირებას.
*/
let x = 10;
x++; 
console.log(x); // 11

let y = 10;
y--; 
console.log(y); // 9

// 7) 
/*
Falsy არის მნიშვნელობა, რომელიც ლოგიკურ კონტექსტში false-ად განიხილება. ესენია: false, 0, "", null, undefined და NaN.
Truthy არის ნებისმიერი სხვა მნიშვნელობა, რომელიც ლოგიკურ კონტექსტში true-ად განიხილება
*/

// 8)
const weekDay = "კვირა";

// 9) 
console.log(Math.PI);

// 10)
let num1 = Math.floor(Math.random() * 10) + 1; 
let num2 = Math.floor(Math.random() * 30) + 1; 
console.log(Math.pow(num1, num2));

// 11)
let age = 20;
age >= 18 ? console.log("Adult") : console.log("Minor");

// 12) Switch Case
let myName = "nikolozi"; 
switch (myName) {
  case "davit":
    console.log("გამარჯობა, დავით!");
    break;
  case "nikolozi":
    console.log("გამარჯობა, ნიკოლოზ!");
    break;
  case "vazha":
    console.log("გამარჯობა, ვაჟა!");
    break;
  default:
    console.log("გამარჯობა, უცნობო სტუმარო!");
}