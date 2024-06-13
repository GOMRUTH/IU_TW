package com.example.tp_final_interfaces.model;

import com.example.tp_final_interfaces.model.composite_primary_keys.PrediccionId;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "predicciones")
@IdClass(PrediccionId.class)
@Getter @Setter
public class Prediccion {
    @Id
    @Column(name = "id_usuario")
    private Integer idUsuario;

    @Id
    @Column(name = "id_libro")
    private Integer idLibro;

    @Column(name = "calificacion_estimada")
    private Double calificacionEstimada;
}
