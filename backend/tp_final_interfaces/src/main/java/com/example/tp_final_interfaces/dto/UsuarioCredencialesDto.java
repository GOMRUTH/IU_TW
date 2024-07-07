package com.example.tp_final_interfaces.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class UsuarioCredencialesDto {
    private String email;

    private String password;
}
