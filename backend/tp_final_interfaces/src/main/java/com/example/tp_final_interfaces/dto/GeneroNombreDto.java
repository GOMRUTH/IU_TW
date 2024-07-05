package com.example.tp_final_interfaces.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor
public class GeneroNombreDto {
    @JsonProperty("nombre")
    private String nombreGenero;
}
