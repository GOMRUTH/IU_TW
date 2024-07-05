package com.example.tp_final_interfaces.controller;

import com.example.tp_final_interfaces.dto.LibroListDto;
import com.example.tp_final_interfaces.service.IPrediccionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@EnableScheduling
@RestController
@RequestMapping(path="/api/recomendar")
public class PrediccionController {
    @Autowired
    private IPrediccionService service;

    @GetMapping(path = "/{userId}_{cantPredicciones}")
    public List<LibroListDto> getTopNPredicciones(
            @PathVariable("userId") Integer userId,
            @PathVariable("cantPredicciones") Integer cantPredicciones
    ) {
        return this.service.getTopNPrediccionesByUserId(userId, cantPredicciones);
    }
}
