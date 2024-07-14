const libros = [
    {
        book_id: 1,
        goodreads_book_id: 2767052,
        best_book_id: 2767052,
        isbn: 439023483,
        isbn13: 9780439023480,
        authors: "Suzanne Collins",
        original_publication_year: 2008,
        original_title: "The Hunger Games",
        title: "The Hunger Games (The Hunger Games, #1)",
        language_code: "eng",
        average_rating: 4.34,
        work_ratings_count: 4942365,
        ratings_1: 66715,
        ratings_2: 127936,
        ratings_3: 560092,
        ratings_4: 1481305,
        ratings_5: 2706317,
        image_url: "https://images.gr-assets.com/books/1447303603m/2767052.jpg",
        small_image_url: "https://images.gr-assets.com/books/1447303603s/2767052.jpg"
    },
    {
        book_id: 2,
        goodreads_book_id: 3,
        best_book_id: 3,
        isbn: 439554934,
        isbn13: 9780439554930,
        authors: "J.K. Rowling, Mary GrandPré",
        original_publication_year: 1997,
        original_title: "Harry Potter and the Philosopher's Stone",
        title: "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
        language_code: "eng",
        average_rating: 4.44,
        work_ratings_count: 4800065,
        ratings_1: 75504,
        ratings_2: 101676,
        ratings_3: 455024,
        ratings_4: 1156318,
        ratings_5: 3011543,
        image_url: "https://images.gr-assets.com/books/1474154022m/3.jpg",
        small_image_url: "https://images.gr-assets.com/books/1474154022s/3.jpg"
    },
    {
        book_id: 3,
        goodreads_book_id: 41865,
        best_book_id: 41865,
        isbn: 316015849,
        isbn13: 9780316015840,
        authors: "Stephenie Meyer",
        original_publication_year: 2005,
        original_title: "Twilight",
        title: "Twilight (Twilight, #1)",
        language_code: "en-US",
        average_rating: 3.57,
        work_ratings_count: 3916824,
        ratings_1: 456191,
        ratings_2: 436802,
        ratings_3: 793319,
        ratings_4: 875073,
        ratings_5: 1355439,
        image_url: "https://images.gr-assets.com/books/1361039443m/41865.jpg",
        small_image_url: "https://images.gr-assets.com/books/1361039443s/41865.jpg"
    },
    {
        book_id: 4,
        goodreads_book_id: 2657,
        best_book_id: 2657,
        isbn: 61120081,
        isbn13: 9780061120080,
        authors: "Harper Lee",
        original_publication_year: 1960,
        original_title: "To Kill a Mockingbird",
        title: "To Kill a Mockingbird",
        language_code: "eng",
        average_rating: 4.25,
        work_ratings_count: 3340896,
        ratings_1: 60427,
        ratings_2: 117415,
        ratings_3: 446835,
        ratings_4: 1001952,
        ratings_5: 1714267,
        image_url: "https://images.gr-assets.com/books/1361975680m/2657.jpg",
        small_image_url: "https://images.gr-assets.com/books/1361975680s/2657.jpg"
    },
    {
        book_id: 5,
        goodreads_book_id: 4671,
        best_book_id: 4671,
        isbn: 743273567,
        isbn13: 9780743273560,
        authors: "F. Scott Fitzgerald",
        original_publication_year: 1925,
        original_title: "The Great Gatsby",
        title: "The Great Gatsby",
        language_code: "eng",
        average_rating: 3.89,
        work_ratings_count: 2773745,
        ratings_1: 86236,
        ratings_2: 197621,
        ratings_3: 606158,
        ratings_4: 936012,
        ratings_5: 947718,
        image_url: "https://images.gr-assets.com/books/1490528560m/4671.jpg",
        small_image_url: "https://images.gr-assets.com/books/1490528560s/4671.jpg"
    },
    {
        book_id: 6,
        goodreads_book_id: 11870085,
        best_book_id: 11870085,
        isbn: 525478817,
        isbn13: 9780525478810,
        authors: "John Green",
        original_publication_year: 2012,
        original_title: "The Fault in Our Stars",
        title: "The Fault in Our Stars",
        language_code: "eng",
        average_rating: 4.26,
        work_ratings_count: 2478609,
        ratings_1: 47994,
        ratings_2: 92723,
        ratings_3: 327550,
        ratings_4: 698471,
        ratings_5: 1311871,
        image_url: "https://images.gr-assets.com/books/1360206420m/11870085.jpg",
        small_image_url: "https://images.gr-assets.com/books/1360206420s/11870085.jpg"
    },
    {
        book_id: 7,
        goodreads_book_id: 5907,
        best_book_id: 5907,
        isbn: 618260307,
        isbn13: 9780618260300,
        authors: "J.R.R. Tolkien",
        original_publication_year: 1937,
        original_title: "The Hobbit or There and Back Again",
        title: "The Hobbit",
        language_code: "en-US",
        average_rating: 4.25,
        work_ratings_count: 2196809,
        ratings_1: 46023,
        ratings_2: 76784,
        ratings_3: 288649,
        ratings_4: 665635,
        ratings_5: 1119718,
        image_url: "https://images.gr-assets.com/books/1372847500m/5907.jpg",
        small_image_url: "https://images.gr-assets.com/books/1372847500s/5907.jpg"
    },
    {
        book_id: 8,
        goodreads_book_id: 5107,
        best_book_id: 5107,
        isbn: 316769177,
        isbn13: 9780316769170,
        authors: "J.D. Salinger",
        original_publication_year: 1951,
        original_title: "The Catcher in the Rye",
        title: "The Catcher in the Rye",
        language_code: "eng",
        average_rating: 3.79,
        work_ratings_count: 2120637,
        ratings_1: 109383,
        ratings_2: 185520,
        ratings_3: 455042,
        ratings_4: 661516,
        ratings_5: 709176,
        image_url: "https://images.gr-assets.com/books/1398034300m/5107.jpg",
        small_image_url: "https://images.gr-assets.com/books/1398034300s/5107.jpg"
    },
    {
        book_id: 9,
        goodreads_book_id: 960,
        best_book_id: 960,
        isbn: 1416524797,
        isbn13: 9781416524790,
        authors: "Dan Brown",
        original_publication_year: 2000,
        original_title: "Angels & Demons",
        title: "Angels & Demons  (Robert Langdon, #1)",
        language_code: "en-CA",
        average_rating: 3.85,
        work_ratings_count: 2078754,
        ratings_1: 77841,
        ratings_2: 145740,
        ratings_3: 458429,
        ratings_4: 716569,
        ratings_5: 680175,
        image_url: "https://images.gr-assets.com/books/1303390735m/960.jpg",
        small_image_url: "https://images.gr-assets.com/books/1303390735s/960.jpg"
    },
    {
        book_id: 10,
        goodreads_book_id: 1885,
        best_book_id: 1885,
        isbn: 679783261,
        isbn13: 9780679783270,
        authors: "Jane Austen",
        original_publication_year: 1813,
        original_title: "Pride and Prejudice",
        title: "Pride and Prejudice",
        language_code: "eng",
        average_rating: 4.24,
        work_ratings_count: 2191465,
        ratings_1: 54700,
        ratings_2: 86485,
        ratings_3: 284852,
        ratings_4: 609755,
        ratings_5: 1155673,
        image_url: "https://images.gr-assets.com/books/1320399351m/1885.jpg",
        small_image_url: "https://images.gr-assets.com/books/1320399351s/1885.jpg"
    }
];

// Función para mostrar los libros en el HTML
function mostrarLibros() {
    const contenedorLibros = document.querySelector('.contenedorLibros');
    contenedorLibros.innerHTML = ''; // Limpiar el contenedor

    libros.forEach(libro => {
        const libroElemento = document.createElement('div');
        libroElemento.classList.add('libro');

        // Crear las estrellas de calificación
        const estrellas = crearEstrellas(libro.average_rating);

        libroElemento.innerHTML = `
            <h3>${libro.title}</h3>
            <p><strong>Autor:</strong> ${libro.authors}</p>
            <p><strong>Año de Publicación:</strong> ${libro.original_publication_year}</p>
            <p><strong>Calificación Promedio:</strong> ${libro.average_rating}</p>
            <div class="estrellas">${estrellas}</div>
            <img src="${libro.image_url}" alt="${libro.title}">
            <button class="btn-recomendar" data-id="${libro.goodreads_book_id}">Ver más</button>
        `;

        contenedorLibros.appendChild(libroElemento);
    });

    document.querySelectorAll('.btn-recomendar').forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.getAttribute('data-id');
            irAPagina(bookId);
        });
    });
}

// Función para crear las estrellas basadas en la calificación
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

// Función para redirigir a la página del libro
function irAPagina(bookId) {
    const isLoggedIn = false; // Cambia esto según el estado real de autenticación del usuario
    if (isLoggedIn) {
        const url = `https://www.goodreads.com/book/show/${bookId}`;
        window.location.href = url;
    } else {
        alert("Por favor, inicia sesión o regístrate para recomendar este libro.");
        window.location.href = 'login.html'; // Cambia a la URL de tu página de login/registro
    }
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', mostrarLibros);