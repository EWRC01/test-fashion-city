//Login Form
const formLogin = document.getElementById("login-form");
formLogin.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    
    //sign in with users

    auth.signInWithEmailAndPassword(email, pass).then(() => 
    location.href="index.html")
    
            .catch((error) => {
                alert(error.message);
            });
});