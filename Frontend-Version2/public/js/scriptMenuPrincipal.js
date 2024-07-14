document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    const emailActual = localStorage.getItem('userEmail');
    console.log('Email actual:', emailActual);
    if (!emailActual) {
        console.log('Redirigiendo a login.html');
        window.location.href = 'login.html';
        return;
    }

    const usuarios = obtenerUsuarios();
    console.log('Usuarios obtenidos:', usuarios);
    const usuarioActual = usuarios.find(usuario => usuario.email === emailActual);
    console.log('Usuario actual:', usuarioActual);

    if (!usuarioActual) {
        console.log('Usuario no encontrado. Redirigiendo a login.html');
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('user-name').textContent = usuarioActual.usuario;

    const idUsuarioActual = usuarioActual.id_usuario;
    mostrarRecomendaciones(idUsuarioActual);

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', () => filtrarRecomendaciones(idUsuarioActual, searchInput.value));
    }

    const logoutButton = document.getElementById('logout-btn');
    if (logoutButton) {
        logoutButton.addEventListener('click', cerrarSesion);
    } else {
        console.error('Logout button not found');
    }

    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});

function obtenerUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
    console.log("Usuarios obtenidos en función:", usuarios);
    return usuarios;
}

function obtenerPredicciones() {
    return new Promise((resolve) => {
        const predicciones = JSON.parse(localStorage.getItem('predicciones')) || [];
        console.log("Predicciones obtenidas:", predicciones);
        resolve(predicciones);
    });
}

function obtenerLibros() {
    return new Promise((resolve) => {
        const libros = JSON.parse(localStorage.getItem('libros')) || [];
        console.log("Libros obtenidos:", libros);
        resolve(libros);
    });
}

function mostrarRecomendaciones(idUsuario) {
    console.log("Mostrando recomendaciones para usuario ID:", idUsuario);
    Promise.all([obtenerPredicciones(), obtenerLibros()]).then(values => {
        const [predicciones, libros] = values;
        const prediccionesUsuario = predicciones[idUsuario] || [];

        const prediccionesContainer = document.getElementById('predicciones-container');
        prediccionesContainer.innerHTML = '';

        prediccionesUsuario.forEach(prediccion => {
            const libro = libros.find(l => l.id_libro === prediccion.id_libro);
            if (libro) {
                const libroHTML = `
                    <div class="libro-recomendado">
                        <img src="${libro.url_imagen}" alt="${libro.titulo}">
                        <h3>${libro.titulo}</h3>
                        <p>Autor: ${libro.autores}</p>
                        <p>Calificación estimada: ${prediccion.calificacion_estimada.toFixed(2)}</p>
                    </div>
                `;
                prediccionesContainer.innerHTML += libroHTML;
            }
        });
    }).catch(error => {
        console.error("Error al obtener datos:", error);
    });
}

function filtrarRecomendaciones(idUsuario, query) {
    query = query.toLowerCase();
    console.log("Filtrando recomendaciones para usuario ID:", idUsuario, "con query:", query);
    Promise.all([obtenerPredicciones(), obtenerLibros()]).then(values => {
        const [predicciones, libros] = values;
        const prediccionesUsuario = predicciones[idUsuario] || [];

        const prediccionesContainer = document.getElementById('predicciones-container');
        prediccionesContainer.innerHTML = '';

        prediccionesUsuario.forEach(prediccion => {
            const libro = libros.find(l => l.id_libro === prediccion.id_libro);
            if (libro && (libro.titulo.toLowerCase().includes(query) || libro.autores.toLowerCase().includes(query))) {
                const libroHTML = `
                    <div class="libro-recomendado">
                        <img src="${libro.url_imagen}" alt="${libro.titulo}">
                        <h3>${libro.titulo}</h3>
                        <p>Autor: ${libro.autores}</p>
                        <p>Calificación estimada: ${prediccion.calificacion_estimada.toFixed(2)}</p>
                    </div>
                `;
                prediccionesContainer.innerHTML += libroHTML;
            }
        });
    }).catch(error => {
        console.error("Error al obtener datos:", error);
    });
}

function cerrarSesion() {
    console.log("Cerrando sesión");
    localStorage.removeItem('userEmail'); 
    window.location.href = 'index.html';
}
