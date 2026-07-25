let fruits = ["ვაშლი", "ბანანი", "ატამი"];
fruits.push("მსხალი");
console.log(fruits);

let numbers = [10, 20, 30, 40];
let removedNum = numbers.pop();
console.log("წაშლილი ელემენტი:", removedNum);
console.log("განახლებული სია:", numbers);

let words = ["html", "css", "javascript", "react", "node"];
let joinedString = words.join("-");
console.log(joinedString);

let items = ["a", "b", "c", "d", "e", "f"];
let slicedItems = items.slice(2, 5);
console.log(slicedItems);

let cities = ["თბილისი", "ბათუმი", "ქუთაისი", "თელავი"];
let removedCity = cities.shift();
console.log("წაშლილი ელემენტი:", removedCity);
console.log("დარჩენილი სია:", cities);

let numList = [100, 200, 300];
numList.unshift(50);
console.log("ახალი სია:", numList);
console.log("სიის სიგრძე:", numList.length);

let animals = ["ძაღლი", "კატა"];
let birds = ["არწივი", "შაშვი"];
let combined = animals.concat(birds);
console.log(combined);

let elements = [10, 20, 30, 40, 50, 60, 70];
let splicedElements = elements.splice(3, 2);
console.log("წაშლილი ელემენტები:", splicedElements);
console.log("განახლებული სია:", elements);