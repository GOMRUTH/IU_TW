document.addEventListener('DOMContentLoaded', function() {
    var profileForm = document.getElementById('profile-form');
    var editAvatarBtn = document.getElementById('edit-avatar');
    var editUsernameBtn = document.getElementById('edit-username');
    var editEmailBtn = document.getElementById('edit-email');
    var editPasswordBtn = document.getElementById('edit-password');
    var editConfirmPasswordBtn = document.getElementById('edit-confirm-password');
    var saveChangesBtn = document.getElementById('save-changes');
    var cancelEditBtn = document.getElementById('cancel-edit');
    var avatarGallery = document.getElementById('avatar-gallery');

    var photo = [
        "../public/img/avatar/dibujo.png",
        "../public/img/avatar/gatito (1).png",
        "../public/img/avatar/gatito.png",
        "../public/img/avatar/hombre (1).png",
        "../public/img/avatar/hombre (2).png",
        "../public/img/avatar/hombre (3).png",
        "../public/img/avatar/hombre (4).png",
        "../public/img/avatar/hombre.png",
        "../public/img/avatar/leon.png",
        "../public/img/avatar/monstruo (1).png",
        "../public/img/avatar/monstruo (2).png",
        "../public/img/avatar/monstruo (3).png",
        "../public/img/avatar/monstruo (4).png",
        "../public/img/avatar/monstruo.png",
        "../public/img/avatar/mujer (1).png",
        "../public/img/avatar/mujer (2).png",
        "../public/img/avatar/mujer (3).png",
        "../public/img/avatar/mujer (4).png",
        "../public/img/avatar/mujer.png"
    ];

    var avatarInput = document.getElementById('avatar');

    // Añadir imágenes a la galería de avatares
    photo.forEach(function(src) {
        var img = document.createElement('img');
        img.src = src;
        img.classList.add('avatar-option');
        avatarGallery.appendChild(img);
    });

    function enableEditMode(inputField, editBtn) {
        inputField.disabled = false;
        inputField.classList.add('editing');
        editBtn.style.display = 'none';
        saveChangesBtn.style.display = 'inline-block';
        cancelEditBtn.style.display = 'inline-block';
    }

    function disableEditMode(inputField, editBtn) {
        inputField.disabled = true;
        inputField.classList.remove('editing');
        editBtn.style.display = 'inline-block';
        saveChangesBtn.style.display = 'none';
        cancelEditBtn.style.display = 'none';
    }

    editAvatarBtn.addEventListener('click', function() {
        enableEditMode(avatarInput, editAvatarBtn);
        avatarGallery.style.display = 'block'; // Mostrar la galería de avatares
    });

    // Event listener para seleccionar una imagen de avatar
    avatarGallery.addEventListener('click', function(event) {
        if (event.target.classList.contains('avatar-option')) {
            var selectedAvatar = event.target.src;
            // Aquí puedes realizar la lógica para guardar la imagen seleccionada
            alert('Imagen de avatar seleccionada: ' + selectedAvatar);
            // También puedes mostrar la imagen seleccionada en un elemento HTML
        }
    });

    editAvatarBtn.addEventListener('click', function() {
        var avatarInput = document.getElementById('avatar');
        enableEditMode(avatarInput, editAvatarBtn);
        avatarGallery.style.display = 'block'; // Mostrar la galería de avatares
    });

    editUsernameBtn.addEventListener('click', function() {
        var usernameInput = document.getElementById('username');
        enableEditMode(usernameInput, editUsernameBtn);
    });

    editEmailBtn.addEventListener('click', function() {
        var emailInput = document.getElementById('email');
        enableEditMode(emailInput, editEmailBtn);
    });

    editPasswordBtn.addEventListener('click', function() {
        var passwordInput = document.getElementById('password');
        enableEditMode(passwordInput, editPasswordBtn);
    });

    editConfirmPasswordBtn.addEventListener('click', function() {
        var confirmPasswordInput = document.getElementById('confirm-password');
        enableEditMode(confirmPasswordInput, editConfirmPasswordBtn);
    });

    cancelEditBtn.addEventListener('click', function() {
        var inputFields = profileForm.querySelectorAll('input.editing');
        inputFields.forEach(function(inputField) {
            disableEditMode(inputField, document.getElementById('edit-' + inputField.id));
        });
        avatarGallery.style.display = 'none'; // Ocultar la galería de avatares
    });

    saveChangesBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var inputFields = profileForm.querySelectorAll('input.editing');
        inputFields.forEach(function(inputField) {
            disableEditMode(inputField, document.getElementById('edit-' + inputField.id));
        });
        avatarGallery.style.display = 'none'; // Ocultar la galería de avatares
    });

    var logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userName');
        alert('Sesión cerrada');
        window.location.href = 'login.html';
    });

    // Cargar los datos del usuario al acceder a la página de perfil
    var userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('username').value = userName;
        // Aquí puedes cargar otros datos del usuario si los tienes almacenados
    } else {
        alert('Debe iniciar sesión primero');
        window.location.href = 'login.html';
    }
});
