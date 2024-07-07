package com.example.tp_final_interfaces.mapper;

import com.example.tp_final_interfaces.dto.UsuarioDto;
import com.example.tp_final_interfaces.model.Usuario;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class UsuarioMapper {
    public static UsuarioDto usuarioToUsuarioDto(Usuario user) {
        return new UsuarioDto(user.getNombreUsuario(), user.getApellidoUsuario(), user.getUsername(), user.getEmail());
    }
}
