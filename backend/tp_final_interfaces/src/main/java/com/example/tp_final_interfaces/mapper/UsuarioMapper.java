package com.example.tp_final_interfaces.mapper;

import com.example.tp_final_interfaces.dto.UsuarioNoPasswordDto;
import com.example.tp_final_interfaces.model.Usuario;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class UsuarioMapper {
    public static UsuarioNoPasswordDto usuarioToUsuarioDto(Usuario user) {
        return new UsuarioNoPasswordDto(user.getNombreUsuario(), user.getApellidoUsuario(), user.getUsername(), user.getEmail());
    }
}
