package com.example.tp_final_interfaces.service;

import com.example.tp_final_interfaces.dto.LibroListDto;

import java.util.List;

public interface IPrediccionService {
    List<LibroListDto> getTopNPrediccionesByUserId(Integer userId, Integer cantPredicciones);
}
