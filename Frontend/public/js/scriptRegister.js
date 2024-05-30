document.addEventListener('DOMContentLoaded', function() {
    var registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(registerForm);
        var newUser = {};
        formData.forEach(function(value, key) {
            newUser[key] = value;
        });

        console.log('Nuevo usuario:', newUser);

        var usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
        usuariosRegistrados.push(newUser);
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));

        console.log('Usuarios registrados actualizados:', usuariosRegistrados);

        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        window.location.href = 'login.html';
    });
});
