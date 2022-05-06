// import navbar from ""



// create account

function myfunction() {
    window.location.href = "myacc.html"
}
document.querySelector("form").addEventListener("submit", createFun)
var userData = JSON.parse(localStorage.getItem("userCreds")) || []
function createFun() {
    event.preventDefault();
    var userObj = {
        name:document.querySelector("#firstname").value,
        name1:document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,

    }
    userData.push(userObj);
    localStorage.setItem("userCreds", JSON.stringify(userData))
}

// siginin
document.querySelector("form").addEventListener("submit", loginFun);
let regUser = JSON.parse(localStorage.getItem("userCreds"));
function loginFun() {
    event.preventDefault();
    let enteredEmail = document.querySelector("#email").value;
    let enteredPass = document.querySelector("#password").value;
    for (let i = 0; i < regUser.length; i++) {
        console.log(regUser[i]);

        if (regUser[i].email == enteredEmail && regUser[i].password == enteredPass) {
            alert("login sucess")
            window.location.href = "wishlist.html"
            break;
            console.log(enteredEmail, regUser[i].email)
            console.log(enteredPass, regUser.password)
        }
        else {
            alert("incorrect mail or password")
        }
    }
}