package com.example.tp_final_interfaces.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class GeneroDto {
    @JsonProperty("nombre")
    private String nombreGenero;
}
