document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(registerForm);
        const newUser = Object.fromEntries(formData.entries());

        console.log('Datos de nuevo usuario:', newUser);

        let usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

        // Asignar un nuevo ID único al usuario
        newUser.id_usuario = usuariosRegistrados.length > 0 
            ? usuariosRegistrados[usuariosRegistrados.length - 1].id_usuario + 1 
            : 1;

        newUser.primeraVez = true;

        usuariosRegistrados.push(newUser);
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));

        alert('Usuario registrado con éxito');
        window.location.href = 'login.html';
    });
});
