package com.example.tp_final_interfaces.controller;

import com.example.tp_final_interfaces.dto.LibroDto;
import com.example.tp_final_interfaces.dto.LibroListDto;
import com.example.tp_final_interfaces.model.Libro;
import com.example.tp_final_interfaces.service.ILibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@EnableScheduling
@CrossOrigin
@RestController
@RequestMapping(path="/api/libros")
public class LibroController {
    @Autowired
    private ILibroService service;

    @GetMapping(path = "/find/all/{numPagina}_{cantLibros}")
    public List<LibroListDto> getLibrosForGrid(
            @PathVariable("numPagina") Integer numPagina,
            @PathVariable("cantLibros") Integer cantLibros
    ) {
        return this.service.getLibrosListDto(numPagina, cantLibros);
    }

    @GetMapping(path = "/find/{idLibro}")
    public Optional<LibroDto> getLibroById(@PathVariable("idLibro")Integer idLibro) {
        return this.service.getLibroById(idLibro);
    }

    @GetMapping(path = "/find/{nombreGenero}/{año}/{minRating}")
    public List<LibroListDto> getLibrosByGeneroAndAñoDePublicacionOriginalAndMinRating(
            @PathVariable("nombreGenero")String genero,
            @PathVariable("año")String añoDePublicacionOriginal,
            @PathVariable("minRating")Integer calificacionMinima
    ) {
        return this.service.getLibrosByGeneroAndReleaseYearAndMinRating(genero, añoDePublicacionOriginal, calificacionMinima);
    }
}
