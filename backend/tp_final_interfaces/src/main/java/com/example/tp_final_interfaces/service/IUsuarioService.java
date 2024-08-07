package com.example.tp_final_interfaces.service;

import com.example.tp_final_interfaces.dto.UsuarioCredencialesDto;
import com.example.tp_final_interfaces.dto.UsuarioDto;
import com.example.tp_final_interfaces.dto.UsuarioNoPasswordDto;
import com.example.tp_final_interfaces.model.Usuario;

import java.util.Optional;

public interface IUsuarioService {
    Optional<Usuario> findUserById(Integer id);

    Optional<UsuarioNoPasswordDto> checkAuthoritation(UsuarioCredencialesDto credenciales);

    void upploadUser(UsuarioDto user);
}
