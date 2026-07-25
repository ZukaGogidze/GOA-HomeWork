

//1

console.log("--- 1.1 ---");
for (let i = 4; i <= 10; i += 2) {
    console.log(i);
}

console.log("--- 1.2 ---");
for (let i = 5; i <= 15; i += 3) {
    console.log(i);
}

console.log("--- 1.3 ---");
for (let i = 10; i <= 21; i += 4) {
    console.log(i);
}

console.log("--- 1.4 ---");
for (let i = 14; i <= 64; i += 5) {
    console.log(i);
}

console.log("--- 1.5 ---");
for (let i = 64; i <= 120; i += 6) {
    console.log(i);
}



//2

const correctPassword = "SecretPassword123";
let attempts = 3;

while (attempts > 0) {
    let userInput = prompt(`გთხოვთ შეიყვანოთ პაროლი. (დაგრჩათ ${attempts} ცდა):`);
    
    if (userInput === correctPassword) {
        alert("პაროლი სწორია! თქვენ წარმატებით გაიარეთ ავტორიზაცია.");
        break;
    } else {
        attempts--;
        
        if (attempts === 0) {
            alert("თქვენ ამოწურეთ 3-ვე მცდელობა. სისტემა იბლოკება. ნახვამდის!");
        } else {
            alert("პაროლი არასწორია, სცადეთ თავიდან.");
        }
    }
}


//3


console.log("--- do...while მაგალითი ---");
let num = 4;

do {
    console.log(num);
    num += 2;
} while (num <= 10);