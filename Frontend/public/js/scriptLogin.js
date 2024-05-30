document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(loginForm);
        var userData = {};
        formData.forEach(function(value, key) {
            userData[key] = value;
        });

        console.log('Datos de usuario ingresados:', userData);

        var usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
        console.log('Usuarios registrados:', usuariosRegistrados);

        var usuarioAutenticado = usuariosRegistrados.find(function(usuario) {
            return (usuario.username === userData['username'] || usuario.email === userData['username']) &&
                   usuario.password === userData['password'];
        });

        if (usuarioAutenticado) {
            console.log('Usuario autenticado:', usuarioAutenticado);
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('userName', usuarioAutenticado.username);
            window.location.href = 'menuPrincipal.html';
        } else {
            console.log('Error de autenticación');
            alert('Error de autenticación: Usuario o contraseña incorrectos');
        }
    });
});
