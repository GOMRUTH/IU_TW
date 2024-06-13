package com.example.tp_final_interfaces.service;

import com.example.tp_final_interfaces.model.Genero;

import java.util.List;

public interface IGeneroService {
    List<Genero> getGenerosByLibroIdAndQty(Integer idLibro, Integer cantGeneros);
}
