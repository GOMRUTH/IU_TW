package com.example.tp_final_interfaces.service.implementation;

import com.example.tp_final_interfaces.mapper.GeneroMapper;
import com.example.tp_final_interfaces.model.Genero;
import com.example.tp_final_interfaces.dto.GeneroDto;
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
    public List<GeneroDto> getAllGeneros() {
        List<Genero> generos= this.repository.findAll();
        return GeneroMapper.generoListToGeneroDtoList(generos);
    }
}
