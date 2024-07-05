package com.example.tp_final_interfaces.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class LibroDto {
    @JsonProperty("id")
    private Integer idLibro;

    @JsonProperty("isbn")
    private String isbn;

    @JsonProperty("isbn13")
    private String isbn13;

    @JsonProperty("autores")
    private String autores;

    @JsonProperty("año_de_publicacion_original")
    private String añoDePublicacionOriginal;

    @JsonProperty("titulo_original")
    private String tituloOriginal;

    @JsonProperty("titulo")
    private String titulo;

    @JsonProperty("codigo_idioma")
    private String codigoIdioma;

    @JsonProperty("calificacion_1")
    private Integer calificacion1;

    @JsonProperty("calificacion_2")
    private Integer calificacion2;

    @JsonProperty("calificacion_3")
    private Integer calificacion3;

    @JsonProperty("calificacion_4")
    private Integer calificacion4;

    @JsonProperty("calificacion_5")
    private Integer calificacion5;

    @JsonProperty("url_imagen")
    private String urlImagen;

    @JsonProperty("generos")
    private List<GeneroNombreDto> generos;
}
