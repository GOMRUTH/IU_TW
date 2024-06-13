package com.example.tp_final_interfaces.service.implementation;

import com.example.tp_final_interfaces.model.Genero;
import com.example.tp_final_interfaces.repository.GeneroRepository;
import com.example.tp_final_interfaces.service.IGeneroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeneroService implements IGeneroService {
    @Autowired
    private GeneroRepository repository;

    @Override
    public List<Genero> getGenerosByLibroIdAndQty(Integer idLibro, Integer cantGeneros) {
        return null;
    }
}
