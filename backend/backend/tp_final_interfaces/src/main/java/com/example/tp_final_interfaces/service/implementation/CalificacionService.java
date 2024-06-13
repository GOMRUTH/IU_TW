package com.example.tp_final_interfaces.service.implementation;

import com.example.tp_final_interfaces.repository.CalificacionRepository;
import com.example.tp_final_interfaces.service.ICalificacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CalificacionService implements ICalificacionService {
    @Autowired
    private CalificacionRepository repository;
}
