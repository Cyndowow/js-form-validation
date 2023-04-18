const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = email.nextElementSibling;

//Email handling
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const emailIsValid = email.value.length === 0 || emailRegExp.test(email.value);
email.className = emailIsValid ? "valid" : "invalid";
email.addEventListener("input", () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value)
    if(isValid) {
        email.className = "valid";
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        email.className = "invalid";
    }
});


//Check on Submit
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailIsValid = email.value.length === 0 || emailRegExp.test(email.value);
    if(!emailIsValid) {
        email.className = "invalid";
        emailError.textContent = "Please enter a valid Email Address.";
        emailError.className = "error active";
    } else {
        email.className = "valid";
        emailError.textContent = "";
        emailError.className = "error"
    }
});

//Check Country and Zip Code 
function checkZip() {
    const constrains = {
        de: [
            "^\\d{5}$",
            "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
        ],
        ch: [
            "^\\d{4}$",
            "Switerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
        ],
        at: [
            "^\\d{4}$",
            "Austrias ZIPs must have exactly 4 digits.",
        ]
    }

    const country = document.getElementById("country").value;
    const ZIPField = document.getElementById("ZIP");
    const ZIPError = ZIPField.nextElementSibling;

    const constraint = new RegExp(constrains[country][0], "");
    //console.log(constraint);

    const zipIsValid = ZIPField.value.length === 0 || constraint.test(ZIPField.value);
    if(zipIsValid) {
        ZIPField.className = "valid";
        ZIPError.className = "error"
        ZIPError.textContent = "";
        } else {
        ZIPField.className = "invalid";
        ZIPError.className = "error active"
        ZIPError.textContent = `${(constrains[country][1])}`;
    } 
}

window.onload = () => {
    document.getElementById("country").onchange = checkZip;
    document.getElementById("ZIP").oninput = checkZip;
}




const pwd = document.getElementById("pwd");
const pwdConf = document.getElementById("pwdconf");

