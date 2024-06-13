document.addEventListener('DOMContentLoaded', function() {
    var profileForm = document.getElementById('profile-form');
    var editUsernameBtn = document.getElementById('edit-username');
    var editUserlastnameBtn = document.getElementById('edit-userlastname'); // Cambiado el nombre de la variable
    var editEmailBtn = document.getElementById('edit-email');
    var editPasswordBtn = document.getElementById('edit-password');
    var editConfirmPasswordBtn = document.getElementById('edit-confirm-password');
    var saveChangesBtn = document.getElementById('save-changes');
    var cancelEditBtn = document.getElementById('cancel-edit');
    
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

    editUsernameBtn.addEventListener('click', function() {
        var usernameInput = document.getElementById('username');
        enableEditMode(usernameInput, editUsernameBtn);
    });

    editUserlastnameBtn.addEventListener('click', function() {
        var userlastnameInput = document.getElementById('userlastname');
        enableEditMode(userlastnameInput, editUserlastnameBtn);
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
    });

    saveChangesBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var inputFields = profileForm.querySelectorAll('input.editing');
        inputFields.forEach(function(inputField) {
            disableEditMode(inputField, document.getElementById('edit-' + inputField.id));
        });
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
