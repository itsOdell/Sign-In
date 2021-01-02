const data = [];
let button = document.querySelector("button");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let status = document.querySelector("header > h1");

function main(inputData, callBack) {
    data.push(inputData);
    status.style.animationName = "sending";
    status.style.animationDuration = "4s";
    status.style.animationIterationCount = "infinite";
    status.innerHTML = "Sending...";
    setTimeout(function() {
        status.style.removeProperty("animation-name");
        status.style.removeProperty("animation-duration");
        status.style.removeProperty("animation-iteration-count");
        status.innerHTML = "Done!";
        setTimeout(() => {
            alert("email: " + inputData.email + "\npassword: " + inputData.password + "\nI have your credentials now lmao");
        }, 100);
    }, 4000);
}   
