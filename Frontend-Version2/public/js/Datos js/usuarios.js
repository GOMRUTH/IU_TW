const usuarios = [
    { id_usuario: 61, usuario: '@ruthy', nombre: 'Ruth', apellido: 'Gomez', email: 'rg@gmail.com', password: '1234', primeraVez: false},
    { id_usuario: 75, usuario: '@matias', nombre: 'Matias', apellido: 'Correa', email: 'mc@gmail.com', password: '9876', primeraVez: false},
    { id_usuario: 89, usuario: '@carla', nombre: 'Carla', apellido: 'Choque', email: 'cc@gmail.com', password: '4567', primeraVez: false},
    { id_usuario: 143, usuario: '@camila', nombre: 'Camila', apellido: 'Pagano', email: 'cp@gmail.com', password: '2341', primeraVez: false}
];

// Guardar usuarios en localStorage al cargar la página si no están ya guardados
if (!localStorage.getItem('usuariosRegistrados')) {
    localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
}


