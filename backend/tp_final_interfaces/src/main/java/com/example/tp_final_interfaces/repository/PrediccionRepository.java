package com.example.tp_final_interfaces.repository;

import com.example.tp_final_interfaces.dto.LibroListDto;
import com.example.tp_final_interfaces.model.Prediccion;
import com.example.tp_final_interfaces.model.composite_primary_keys.PrediccionId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrediccionRepository extends JpaRepository<Prediccion, PrediccionId> {
    @Query(value = "SELECT new com.example.tp_final_interfaces.dto.LibroListDto(l.idLibro, l.titulo, l.urlImagenChica)"
            + " FROM Libro l, Prediccion p"
            + " WHERE p.idUsuario = :userId"
            + " AND l.idLibro = p.idLibro"
            + " ORDER BY calificacionEstimada DESC"
            + " LIMIT :cantPredicciones")
    List<LibroListDto> findTopNPrediccionesByUserId(@Param("userId") Integer userId,
                                                    @Param("cantPredicciones") Integer cantPredicciones);
}
