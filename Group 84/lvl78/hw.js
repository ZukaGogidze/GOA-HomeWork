let number = 25;
let username = "admin";
let password = "12345";

let rangeResult = (number > 10 && number < 50) ? "რიცხვი დიაპაზონშია" : "რიცხვი დიაპაზონს გარეთაა";
console.log(rangeResult);

let authResult = (username === "admin" && password === "12345") ? "სისტემაში შესვლა წარმატებულია" : "არასწორი მონაცემები";
console.log(authResult);

let role = "moderator";
switch (role) {
    case "admin":
        console.log("სრული უფლებები");
        break;
    case "moderator":
        console.log("საშუალო უფლებები");
        break;
    case "user":
        console.log("ბაზისური უფლებები");
        break;
    default:
        console.log("უცნობი როლი");
}