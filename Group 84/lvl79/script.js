function greet(name = "stranger") {
    console.log(`გამარჯობა, ${name}!`);
}

greet("გიორგი"); 
greet();





function double(number) {
    return number * number;
}

console.log(double(5));




function checkOdd(number) {
    if (number % 2 === 0) {
        return "ლუწი";
    } else {
        return "კენტი";
    }
}

console.log(checkOdd(4));
console.log(checkOdd(7));




function BMI(height, weight) {
    return weight / (height * height);
}

console.log(BMI(1.80, 80));