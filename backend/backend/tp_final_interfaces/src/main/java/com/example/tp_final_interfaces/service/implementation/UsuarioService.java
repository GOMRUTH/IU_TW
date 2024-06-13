package com.example.tp_final_interfaces.service.implementation;

import com.example.tp_final_interfaces.repository.UsuarioRepository;
import com.example.tp_final_interfaces.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements IUsuarioService {
    @Autowired
    private UsuarioRepository repository;
}
