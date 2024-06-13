package com.example.tp_final_interfaces.model.composite_primary_keys;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Getter @Setter @AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class GeneroLibroId implements Serializable {
    private static final long serialVersionUID = -6844847415611229524L;
    @Column(name = "id_libro")
    private Integer libroId;

    @Column(name = "id_genero")
    private Integer generoId;
}
