package com.example.tp_final_interfaces.model;

import com.example.tp_final_interfaces.model.composite_primary_keys.GeneroLibroId;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "generos_libros")
@Getter @Setter
public class GeneroLibro {
    @EmbeddedId
    private GeneroLibroId id;


    @MapsId("libroId")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_libro")
    private Libro libro;


    @MapsId("generoId")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_genero")
    private Genero genero;

    private Integer cantidad;
}
