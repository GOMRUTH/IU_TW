package com.example.tp_final_interfaces.controller;

import com.example.tp_final_interfaces.model.Usuario;
import com.example.tp_final_interfaces.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@EnableScheduling
@CrossOrigin
@RestController
@RequestMapping(path="/api/usuarios")
public class UsuarioController {
    @Autowired
    private IUsuarioService service;

    @GetMapping(path = "/find/{idUsuario}")
    public Optional<Usuario> getUserById(@PathVariable(name = "idUsuario")Integer id) {
        return this.service.findUserById(id);
    }
}
