package com.example.tp_final_interfaces.model;

import com.example.tp_final_interfaces.model.composite_primary_keys.CalificacionId;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "calificaciones")
@IdClass(CalificacionId.class)
@Getter @Setter
public class Calificacion {
    @Id
    @Column(name = "id_usuario")
    private Integer idUsuario;

    @Id
    @Column(name = "id_libro")
    private Integer idLibro;

    private Integer calificacion;
}
