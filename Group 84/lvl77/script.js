let randomNumber = Math.floor(Math.random() * 10) + 1;

if (randomNumber % 2 === 0) {
    console.log("რიცხვი ლუწია");
} else {
    console.log("რიცხვი კენტია");
}



let age = prompt("გთხოვთ, შეიყვანოთ თქვენი ასაკი:");
age = Number(age);

if (age < 13) {
    console.log("ბავშვი");
} else if (age >= 13 && age <= 17) {
    console.log("თინეიჯერი");
} else if (age >= 18) {
    console.log("ზრდასრული");
} else {
    console.log("არასწორი ასაკი");
}



let username = prompt("შეიყვანეთ მომხმარებლის სახელი:");
let password = prompt("შეიყვანეთ პაროლი:");

if (username === "admin" && password === "1234") {
    console.log("გილოცავთ თქვენ მოიგეთ 1000 robux");
} else {
    console.log("თავიდან სცადე");
}





let username = prompt("შეიყვანეთ მომხმარებლის სახელი:");
let password = prompt("შეიყვანეთ პაროლი:");

if (username === "admin" && password === "1234") {
    console.log("გილოცავთ თქვენ მოიგეთ 1000 robux");
} else {
    console.log("თავიდან სცადე");
}