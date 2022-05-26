
const username = document.getElementById("username");
const passwd = document.getElementById("password");
const form = document.querySelector(".form");

// error variables
const mailErr = document.querySelector(".mail-err");
const passwdErr = document.querySelector(".passwd-err");

// warning messages
const invalid = "*invalid mail";
const letters = "*password contain minimum 8 or more letters";

// checking variables
let mailVal, passwdVal;

username.addEventListener("input", () => {
    if (!(username.value).match(/@/)) {
        mailErr.innerHTML = invalid;
        username.parentElement.style.border = '1px solid red';
        mailVal = false;
    } else {
        mailErr.innerHTML = "";
        username.parentElement.style.border = '1px solid rgba(0, 0, 0, .5)';
        mailVal = true;
    }

})

passwd.addEventListener("input", () => {
    if (passwd.value.length < 8) {
        passwdErr.innerHTML = letters;
        passwd.parentElement.style.border = '1px solid red';
        passwdVal = false;
    } else {
        passwdErr.innerHTML = "";
        passwd.parentElement.style.border = '1px solid rgba(0, 0, 0, .5)';
        passwdVal = true;
    }

})

// form submission event
form.addEventListener("submit", (e) => {
    const submit = mailVal && passwdVal;
    console.log(submit);
    submit ? alert("submitted") : e.preventDefault();
})