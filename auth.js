//sign up js
const formSignUp = document.getElementById("register-form");
formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    console.log(email, pass);
    //sign in with user
    auth.createUserWithEmailAndPassword(email, pass).then(cred => {
        console.log(cred);
        location.href="login.html";
    })
})
