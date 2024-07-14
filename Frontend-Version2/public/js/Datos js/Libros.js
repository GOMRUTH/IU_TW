function mostrarLibros() {
    const contenedor = document.getElementById('lista-libros');
    if (!contenedor) {
        console.error("No se encontró el contenedor de libros.");
        return;
    }
    
    libros.forEach(libro => {
        const libroElemento = document.createElement('div');
        libroElemento.className = 'libro';
        
        // Calculamos el promedio general de calificaciones
        const promedioGeneral = calcularPromedioGeneral(libro);
        const estrellas = crearEstrellas(promedioGeneral);

        libroElemento.innerHTML = `
            <img src="${libro.url_imagen}" alt="${libro.titulo}">
            <h3>${libro.titulo}</h3>
            <p><strong>Autor:</strong> ${libro.autores}</p>
            <p><strong>Año de Publicación Original:</strong> ${libro.año_de_publicacion}</p>
            <p><strong> Calificación general:</strong> ${promedioGeneral}</p>
            <div class="estrellas">${estrellas}</div>
            <div class="actions">
                <button class="btn-info" onclick="irAPagina('${libro.goodreads_book_id}')">Más info</button>
                <button class="btn-primary" onclick="agregarLibroFavorito(${libro.id_libro})">Agregar a favoritos</button>
            </div>
        `;
        contenedor.appendChild(libroElemento);
    });
}

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

// Agregar el libro a favoritos
function agregarLibroFavorito(libroId) {
    const userName = localStorage.getItem('userName');
    if (!userName) {
        alert("Por favor, inicia sesión o regístrate para agregar este libro a favoritos.");
        window.location.href = 'login.html'; // Redirige a la URL de tu página de login/registro
        return;
    }

    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || {};
    if (!favoritos[userName]) {
        favoritos[userName] = [];
    }

    const libro = libros.find(lib => lib.id_libro === libroId);
    if (libro) {
        favoritos[userName].push(libro);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert("Libro agregado a tus favoritos.");
    } else {
        alert("No se encontró el libro para agregar a favoritos.");
    }
}

document.addEventListener('DOMContentLoaded', mostrarLibros);


