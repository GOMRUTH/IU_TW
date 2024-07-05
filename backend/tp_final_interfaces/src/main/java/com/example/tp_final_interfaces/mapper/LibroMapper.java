package com.example.tp_final_interfaces.mapper;

import com.example.tp_final_interfaces.dto.GeneroDto;
import com.example.tp_final_interfaces.dto.GeneroNombreDto;
import com.example.tp_final_interfaces.dto.LibroDto;
import com.example.tp_final_interfaces.dto.LibroListDto;
import com.example.tp_final_interfaces.model.Libro;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@NoArgsConstructor
public class LibroMapper {
    public static List<LibroListDto> libroToLibroListDto(List<Libro> libros) {
        List<LibroListDto> librosListDto = new ArrayList<LibroListDto>();

        for (Libro libro: libros) {
            LibroListDto libroListDto = new LibroListDto(libro.getIdLibro(),
                    libro.getTitulo(),
                    libro.getUrlImagenChica());
                    librosListDto.add(libroListDto);
        }

        return librosListDto;
    }

    public static Optional<LibroDto> libroToLibroDto(Optional<Libro> libro) {
        if(libro.isPresent()) {
            List<GeneroNombreDto> generosNombreDto;
            generosNombreDto = GeneroMapper.generoLibroToGeneroNombreDto(libro.get().getGeneroLibros());
            return Optional.of(new LibroDto(libro.get().getIdLibro(),
                    libro.get().getIsbn(),
                    libro.get().getIsbn13(),
                    libro.get().getAutores(),
                    libro.get().getAñoDePublicacionOriginal(),
                    libro.get().getTituloOriginal(),
                    libro.get().getTitulo(),
                    libro.get().getCodigoIdioma(),
                    libro.get().getCalificacion1(),
                    libro.get().getCalificacion2(),
                    libro.get().getCalificacion3(),
                    libro.get().getCalificacion4(),
                    libro.get().getCalificacion5(),
                    libro.get().getUrlImagen(),
                    generosNombreDto));
        }

        return Optional.of(new LibroDto());
    }
}
