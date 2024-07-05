package com.example.tp_final_interfaces.service;

import com.example.tp_final_interfaces.dto.LibroDto;
import com.example.tp_final_interfaces.dto.LibroListDto;

import java.util.List;
import java.util.Optional;

public interface ILibroService {
    List<LibroListDto> getLibrosListDto(Integer numPagina, Integer cantLibros);

    Optional<LibroDto> getLibroById(Integer libroId);

    List<LibroListDto> getLibrosByGeneroAndReleaseYearAndMinRating(String genero, String añoDePublicacionOriginal, Integer calificacionMinima);
}
