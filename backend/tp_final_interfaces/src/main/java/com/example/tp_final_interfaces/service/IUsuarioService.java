package com.example.tp_final_interfaces.service;

import com.example.tp_final_interfaces.model.Usuario;

import java.util.Optional;

public interface IUsuarioService {
    Optional<Usuario> findUserById(Integer id);
}
