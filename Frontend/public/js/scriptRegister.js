document.addEventListener('DOMContentLoaded', function() {
    var registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(registerForm);
        var newUser = {};
        formData.forEach(function(value, key) {
            newUser[key] = value;
        });

        fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Nuevo usuario registrado:', data);
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            window.location.href = 'login.html';
        })
        .catch(error => console.error('Error registrando usuario:', error));
    });
});
