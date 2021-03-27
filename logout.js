//logout 
//method logout firebase
const logout = document.getElementById('btnLogout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        alert('El usuario ha cerrado sesión');
        location.href="login.html";
    });
});
