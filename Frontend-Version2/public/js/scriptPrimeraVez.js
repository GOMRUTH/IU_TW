document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nombre de usuario desde localStorage
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('user-name').textContent = userName;
    }

    // Generar dinámicamente los checkboxes según los géneros en generos.js
    const generosListContainer = document.querySelector('.generos-list');

    generos.forEach(genero => {
        const div = document.createElement('div');
        div.innerHTML = `
            <input type="checkbox" id="genero-${genero.id}" value="${genero.id}">
            <label for="genero-${genero.id}">${genero.nombre}</label>
        `;
        generosListContainer.appendChild(div);
    });

    // Manejar el evento de clic en el botón Guardar Géneros
    const guardarGenerosBtn = document.getElementById('guardar-generos-btn');
    guardarGenerosBtn.addEventListener('click', function() {
        const generosSeleccionados = [];
        const checkboxes = document.querySelectorAll('.generos-list input[type="checkbox"]:checked');
        
        checkboxes.forEach(function(checkbox) {
            generosSeleccionados.push(parseInt(checkbox.value));
        });

        // Guardar los géneros seleccionados en localStorage o hacer otra acción
        localStorage.setItem('generosSeleccionados', JSON.stringify(generosSeleccionados));
        console.log('Géneros seleccionados:', generosSeleccionados);
        
        // Redirigir al usuario a la página principal después de guardar los géneros
        window.location.href = 'recomendaciones.html';
    });
});
