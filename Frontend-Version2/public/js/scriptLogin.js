document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const userData = Object.fromEntries(formData.entries());

        console.log('Datos de usuario ingresados:', userData);

        let usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

        console.log('Usuarios registrados:', usuariosRegistrados);

        const usuarioAutenticado = usuariosRegistrados.find(usuario => 
            usuario.email === userData['email'] &&
            usuario.password === userData['password']
        );

        if (usuarioAutenticado) {
            console.log('Usuario autenticado:', usuarioAutenticado);
            localStorage.setItem('userEmail', usuarioAutenticado.email);
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('userName', usuarioAutenticado.usuario);

            // Verificar si es la primera vez que el usuario ingresa después de registrarse
            if (usuarioAutenticado.primeraVez) {
                console.log('Primer ingreso del usuario. Redirigiendo a primeraVez.html');
                window.location.href = 'primeraVez.html';
            } else {
                console.log('Redirigiendo a menuPrincipal.html');
                window.location.href = 'menuPrincipal.html';
            }
            
        } else {
            console.log('Error de autenticación');
            alert('Error de autenticación: Usuario o contraseña incorrectos');
        }
    });
});
