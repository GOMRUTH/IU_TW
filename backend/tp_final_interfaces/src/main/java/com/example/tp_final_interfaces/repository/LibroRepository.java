package com.example.tp_final_interfaces.repository;

import com.example.tp_final_interfaces.dto.LibroListDto;
import com.example.tp_final_interfaces.model.Libro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LibroRepository extends JpaRepository<Libro, Integer> {
    @Query(value = "SELECT new com.example.tp_final_interfaces.dto.LibroListDto(l.idLibro, l.titulo, l.urlImagenChica)"
            + " FROM Libro l, Genero g, GeneroLibro gn"
            + " WHERE l.idLibro = gn.libro.idLibro"
            + " AND g.idGenero = gn.genero.idGenero"
            + " AND g.nombreGenero = :genero"
            + " AND l.añoDePublicacionOriginal = :año"
            + " AND ((l.calificacion1 * 1.0 + l.calificacion2 * 2.0 + l.calificacion3 * 3.0"
            + " + l.calificacion4 * 4.0 + l.calificacion5 * 5.0) / (l.calificacion1 * 1.0"
            + " + l.calificacion2 * 1.0 + l.calificacion3 * 1.0 + l.calificacion4 * 1.0 + l.calificacion5 * 1.0)) > (:rating * 1.0)")
    List<LibroListDto> findAllByGeneroAndAñoDePublicacionOriginalAndMinRating(@Param("genero") String genero,
                                                                              @Param("año") String añoDePublicacionOriginal,
                                                                              @Param("rating") Integer calificacionMinima);
}
