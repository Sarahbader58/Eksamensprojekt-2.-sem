let users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" }
];

let submitBtn = document.getElementById("submitBtn");
let errorMsg = document.getElementById("error-msg");

submitBtn.onclick = function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let isValid = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        document.location.href="dates.html"
    } else {
        errorMsg.style.display = "block";
    }
}