package com.example.tp_final_interfaces.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class UsuarioDto {
    private String nombreUsuario;

    private String apellidoUsuario;

    private String username;

    private String email;

    private String password;
}