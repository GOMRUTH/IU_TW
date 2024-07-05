package com.example.tp_final_interfaces.service.implementation;

import com.example.tp_final_interfaces.dto.LibroDto;
import com.example.tp_final_interfaces.dto.LibroListDto;
import com.example.tp_final_interfaces.mapper.LibroMapper;
import com.example.tp_final_interfaces.model.Libro;
import com.example.tp_final_interfaces.repository.LibroRepository;
import com.example.tp_final_interfaces.service.ILibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LibroService implements ILibroService {
    @Autowired
    private LibroRepository repository;

    @Override
    public List<LibroListDto> getLibrosListDto(Integer numPagina, Integer cantLibros) {
        Pageable page = PageRequest.of(numPagina, cantLibros);
        List<Libro> libros = this.repository.findAll(page).getContent();
        return LibroMapper.libroToLibroListDto(libros);
    }

    @Override
    public Optional<LibroDto> getLibroById(Integer libroId) {
        Optional<Libro> libro = this.repository.findById(libroId);
        if(libro.isPresent()) {
            return LibroMapper.libroToLibroDto(libro);
        }
        return Optional.empty();
    }

    @Override
    public List<LibroListDto> getLibrosByGeneroAndReleaseYearAndMinRating(String genero, String añoDePublicacionOriginal, Integer calificacionMinima) {
        return this.repository.findAllByGeneroAndAñoDePublicacionOriginalAndMinRating(genero, añoDePublicacionOriginal, calificacionMinima);
    }
}
