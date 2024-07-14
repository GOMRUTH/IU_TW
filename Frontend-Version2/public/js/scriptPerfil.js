document.addEventListener('DOMContentLoaded', () => {
    // Obtener usuarios desde el localStorage
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

    // Obtener el email del usuario actual desde el localStorage
    const emailActual = localStorage.getItem('userEmail');

    // Buscar los datos del usuario actual
    const usuarioActual = usuariosRegistrados.find(usuario => usuario.email === emailActual);

    // Verificar si el usuario está logueado
    if (usuarioActual) {
        document.getElementById('display-username').textContent = usuarioActual.usuario;
        document.getElementById('username').value = usuarioActual.usuario;
        document.getElementById('display-firstname').textContent = usuarioActual.nombre;
        document.getElementById('firstname').value = usuarioActual.nombre;
        document.getElementById('display-lastname').textContent = usuarioActual.apellido;
        document.getElementById('lastname').value = usuarioActual.apellido;
        document.getElementById('display-email').textContent = usuarioActual.email;
        document.getElementById('email').value = usuarioActual.email;
    } else {
        window.location.href = 'login.html';
    }

    // Maneja el botón de editar perfil
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const profileDisplay = document.getElementById('profile-display');
    const profileForm = document.getElementById('profile-form');
    const cancelEditBtn = document.getElementById('cancel-edit');

    editProfileBtn.addEventListener('click', () => {
        profileDisplay.style.display = 'none';
        profileForm.style.display = 'block';
    });

    cancelEditBtn.addEventListener('click', () => {
        profileDisplay.style.display = 'block';
        profileForm.style.display = 'none';
    });

    // Maneja el formulario de edición de perfil
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const updatedUserName = document.getElementById('username').value;
        const updatedFirstName = document.getElementById('firstname').value;
        const updatedLastName = document.getElementById('lastname').value;
        const updatedEmail = document.getElementById('email').value;
        const updatedPassword = document.getElementById('password').value;

        // Actualiza los datos en localStorage
        usuarioActual.usuario = updatedUserName;
        usuarioActual.nombre = updatedFirstName;
        usuarioActual.apellido = updatedLastName;
        usuarioActual.email = updatedEmail;
        if (updatedPassword) {
            usuarioActual.password = updatedPassword;
        }

        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));

        // Actualiza la visualización
        document.getElementById('display-username').textContent = updatedUserName;
        document.getElementById('display-firstname').textContent = updatedFirstName;
        document.getElementById('display-lastname').textContent = updatedLastName;
        document.getElementById('display-email').textContent = updatedEmail;

        // Muestra el perfil actualizado y oculta el formulario
        profileDisplay.style.display = 'block';
        profileForm.style.display = 'none';
    });

    // Maneja el botón de logout
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    });

    // Maneja el menú toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});
