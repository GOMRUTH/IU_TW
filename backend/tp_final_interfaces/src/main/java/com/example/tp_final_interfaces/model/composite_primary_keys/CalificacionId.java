package com.example.tp_final_interfaces.model.composite_primary_keys;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter @Setter @RequiredArgsConstructor
public class CalificacionId implements Serializable {
    @Column(name = "id_usuario")
    private Integer idUsuario;

    @Column(name = "id_libro")
    private Integer idLibro;
}
