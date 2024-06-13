package com.example.tp_final_interfaces.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "libros")
@Getter @Setter
public class Libro implements Serializable {
    @Id
    @Column(name = "id_libro")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idLibro;

    private String isbn;

    private String isbn13;

    private String autores;

    @Column(name = "año_de_publicacion_original")
    private String añoDePublicacionOriginal;

    @Column(name = "titulo_original")
    private String tituloOriginal;

    private String titulo;

    @Column(name = "codigo_idioma")
    private String codigoIdioma;

    @Column(name = "calificacion_1")
    private Integer calificacion1;

    @Column(name = "calificacion_2")
    private Integer calificacion2;

    @Column(name = "calificacion_3")
    private Integer calificacion3;

    @Column(name = "calificacion_4")
    private Integer calificacion4;

    @Column(name = "calificacion_5")
    private Integer calificacion5;

    @Column(name = "url_imagen")
    private String urlImagen;

    @Column(name = "url_imagen_chica")
    private String urlImagenChica;

    @OneToMany(mappedBy = "libro", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<GeneroLibro> generoLibros;
}
