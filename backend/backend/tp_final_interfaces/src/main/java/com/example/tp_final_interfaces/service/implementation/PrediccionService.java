package com.example.tp_final_interfaces.service.implementation;

import com.example.tp_final_interfaces.repository.PrediccionRepository;
import com.example.tp_final_interfaces.service.IPrediccionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrediccionService implements IPrediccionService {
    @Autowired
    private PrediccionRepository repository;
}
