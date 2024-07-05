package com.example.tp_final_interfaces.service.implementation;

import com.example.tp_final_interfaces.repository.GeneroLibroRepository;
import com.example.tp_final_interfaces.service.IGeneroLibroService;
import com.example.tp_final_interfaces.service.IGeneroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GeneroLibroService implements IGeneroLibroService {
    @Autowired
    private GeneroLibroRepository repository;
}
