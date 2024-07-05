package com.example.tp_final_interfaces.service.implementation;

import com.example.tp_final_interfaces.dto.LibroListDto;
import com.example.tp_final_interfaces.model.Prediccion;
import com.example.tp_final_interfaces.repository.PrediccionRepository;
import com.example.tp_final_interfaces.service.IPrediccionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrediccionService implements IPrediccionService {
    @Autowired
    private PrediccionRepository repository;

    @Override
    public List<LibroListDto> getTopNPrediccionesByUserId(Integer userId, Integer cantPredicciones) {
        return this.repository.findTopNPrediccionesByUserId(userId, cantPredicciones);
    }
}
