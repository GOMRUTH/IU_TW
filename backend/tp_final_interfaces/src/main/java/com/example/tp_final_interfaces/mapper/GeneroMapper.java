package com.example.tp_final_interfaces.mapper;

import com.example.tp_final_interfaces.dto.GeneroDto;
import com.example.tp_final_interfaces.dto.GeneroNombreDto;
import com.example.tp_final_interfaces.model.Genero;
import com.example.tp_final_interfaces.model.GeneroLibro;

import java.util.ArrayList;
import java.util.List;

public class GeneroMapper {
    public static List<GeneroDto> generoListToGeneroDtoList(List<Genero> generos) {
        List<GeneroDto> generosDto = new ArrayList<>();
        for (Genero elem: generos) {
            generosDto.add(new GeneroDto(elem.getIdGenero(), elem.getNombreGenero()));
        }
        return generosDto;
    }

    public static List<GeneroNombreDto> generoLibroToGeneroNombreDto(List<GeneroLibro> generosLibros) {
        List<GeneroNombreDto> generosNombreDto = new ArrayList<>();
        for (GeneroLibro elem: generosLibros) {
            generosNombreDto.add(new GeneroNombreDto(elem.getGenero().getNombreGenero()));
        }
        return generosNombreDto;
    }
}
