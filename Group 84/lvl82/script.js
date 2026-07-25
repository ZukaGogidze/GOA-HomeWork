let fruits = ["ვაშლი", "ბანანი", "ატამი"];
fruits.push("ფორთოხალი");
console.log(fruits);

let cars = ["BMW", "Mercedes", "Audi", "Tesla"];
cars.pop();
console.log(cars);

let cities = ["თბილისი", "ქუთაისი", "ბათუმი", "რუსთავი"];
let citiesString = cities.join(" / ");
console.log(citiesString);

let colors = ["წითელი", "მწვანე", "ლურჯი", "ვარდისფერი", "სტაფილოსფერი", "ყვითელი"];
let selectedColors = colors.slice(0, 3);
console.log(selectedColors);

let inventory = ["laptop", "mouse", "keyboard", "mouse"];
let languages = ["Python", "JS", "C++", "Java"];
let combinedList = inventory.concat(languages);
console.log(combinedList);