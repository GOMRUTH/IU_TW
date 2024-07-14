document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    const logoutButton = document.getElementById('logout-btn');
        if (logoutButton) {
            logoutButton.addEventListener('click', cerrarSesion);
        }

    const userName = localStorage.getItem('userName');
    if (!userName) {
        alert("Por favor, inicia sesión para ver tus favoritos.");
        window.location.href = 'login.html'; // Redirige a la URL de tu página de login/registro
        return;
    }

    const contenedorFavoritos = document.getElementById('container-favoritos');
    if (!contenedorFavoritos) {
        console.error("No se encontró el contenedor de favoritos.");
        return;
    }

    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || {};
    const librosFavoritos = favoritos[userName] || [];

    if (librosFavoritos.length === 0) {
        contenedorFavoritos.innerHTML = "<p>No tienes libros favoritos aún.</p>";
        return;
    }

    librosFavoritos.forEach(libro => {
        const libroElemento = document.createElement('div');
        libroElemento.className = 'libro';
        
        const promedioGeneral = calcularPromedioGeneral(libro);
        const estrellas = crearEstrellas(promedioGeneral);

        libroElemento.innerHTML = `
            <img src="${libro.url_imagen}" alt="${libro.titulo}">
            <h3>${libro.titulo}</h3>
            <p><strong>Autor:</strong> ${libro.autores}</p>
            <p><strong>Año de Publicación Original:</strong> ${libro.año_de_publicacion}</p>
            <p><strong>Calificación general:</strong> ${promedioGeneral}</p>
            <div class="estrellas">${estrellas}</div>
            <div class="actions">
                <button class="btn-info" onclick="irAPagina('${libro.goodreads_book_id}')">Más info</button>
            </div>
        `;
        contenedorFavoritos.appendChild(libroElemento);

    });
});

function crearEstrellas(calificacion) {
    const maxEstrellas = 5;
    let estrellasHTML = '';

    for (let i = 1; i <= maxEstrellas; i++) {
        if (i <= calificacion) {
            estrellasHTML += '<i class="fas fa-star"></i>';
        } else if (i - calificacion < 1) {
            estrellasHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            estrellasHTML += '<i class="far fa-star"></i>';
        }
    }

    return estrellasHTML;
}

function calcularPromedioGeneral(libro) {
    const totalPersonas = libro.calificacion_1 + libro.calificacion_2 + libro.calificacion_3 + libro.calificacion_4 + libro.calificacion_5;
    const totalCalificaciones = 1 * libro.calificacion_1 + 2 * libro.calificacion_2 + 3 * libro.calificacion_3 + 4 * libro.calificacion_4 + 5 * libro.calificacion_5;
    return (totalCalificaciones / totalPersonas).toFixed(1);
}

function irAPagina(libroId) {
    const url = `https://www.goodreads.com/book/show/${libroId}`;
    window.location.href = url;
}

function cerrarSesion() {
    console.log('Cerrar sesión');
    localStorage.removeItem('usuarioActual'); // Ejemplo, elimina el item de usuario actual
    window.location.href = 'index.html';
}
