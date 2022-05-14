let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}





/*
let username = "per";

let message = "You have three new notifications";

let messageToUser = message + ", " + username;

console.log(messageToUser);

let name = "Syed Ali.";

let greeting = "Hi, my name is ";

let myGreeting = greeting + name;

console.log(myGreeting);

console.log(4+5)
console.log("4"+"5")
console.log("4"+5)
console.log(100+"100")

let welcomeEL = document.getElementById("welcome-el");



let name = "Syed";

let greeting = "Welcome back "

welcomeEL.innerText = greeting + name

document.write(name + greeting)

welcomeEL.innerText += 
*/


