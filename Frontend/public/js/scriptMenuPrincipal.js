document.addEventListener('DOMContentLoaded', function() {
    var logoutBtn = document.getElementById('logout-btn');
    
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userName');
        alert('Sesión cerrada');
        window.location.href = 'login.html';
    });
});
