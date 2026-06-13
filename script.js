let secretPassword = 246890

function checkPassword() {
    let password =document.getElementById("passwordInput").value;
    if (password == secretPassword) {
        document.getElementById("message").innerHTML = "Access Granted 🔓"
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").innerHTML = "Wrong Password! Access Denied 🔒"
        document.getElementById("message").style.color = "red";
    }
    document.getElementById("passwordInput").value = "";
}