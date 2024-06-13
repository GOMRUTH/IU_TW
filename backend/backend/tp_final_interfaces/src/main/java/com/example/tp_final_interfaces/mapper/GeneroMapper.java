package com.example.tp_final_interfaces.mapper;

import com.example.tp_final_interfaces.dto.GeneroDto;
import com.example.tp_final_interfaces.model.Genero;
import com.example.tp_final_interfaces.model.GeneroLibro;

import java.util.ArrayList;
import java.util.List;

public class GeneroMapper {
    public static GeneroDto generoToGeneroDto(Genero genero) {
        return new GeneroDto(genero.getNombreGenero());
    }

    public static List<GeneroDto> generoLibroToGeneroDto(List<GeneroLibro> generosLibros) {
        List<GeneroDto> generosDto = new ArrayList<>();
        for (GeneroLibro elem: generosLibros) {
            generosDto.add(new GeneroDto(elem.getGenero().getNombreGenero()));
        }
        return generosDto;
    }
}
