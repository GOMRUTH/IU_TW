package com.example.tp_final_interfaces.controller;

import com.example.tp_final_interfaces.service.IPrediccionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@EnableScheduling
@RestController
@RequestMapping(path="/api/recomendar")
public class PrediccionController {
    @Autowired
    private IPrediccionService service;
}
