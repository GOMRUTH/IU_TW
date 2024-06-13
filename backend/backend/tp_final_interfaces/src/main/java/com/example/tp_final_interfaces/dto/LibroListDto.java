package com.example.tp_final_interfaces.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class LibroListDto {
    @JsonProperty("id")
    private Integer idLibro;

    @JsonProperty("titulo")
    private String titulo;

    @JsonProperty("url_imagen")
    private String urlImagenChica;
}
