package com.example.tp_final_interfaces.controller;

import com.example.tp_final_interfaces.dto.GeneroDto;
import com.example.tp_final_interfaces.service.IGeneroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@EnableScheduling
@RestController
@RequestMapping(path="/api/generos")
public class GeneroController {
    @Autowired
    private IGeneroService service;

    @GetMapping(path = "/find/all")
    public List<GeneroDto> getAllGeneros() {
        return this.service.getAllGeneros();
    }
}
