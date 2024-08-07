package com.example.tp_final_interfaces.controller;

import com.example.tp_final_interfaces.dto.UsuarioCredencialesDto;
import com.example.tp_final_interfaces.dto.UsuarioDto;
import com.example.tp_final_interfaces.dto.UsuarioNoPasswordDto;
import com.example.tp_final_interfaces.model.Usuario;
import com.example.tp_final_interfaces.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PostMapping(path = "/auth")
    public ResponseEntity<?> checkAuthoritation(@RequestBody UsuarioCredencialesDto credenciales) {
        Optional<UsuarioNoPasswordDto> result = this.service.checkAuthoritation(credenciales);

        if(result.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(result);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario/email o contraseña inválidos.");
    }

    @PostMapping(path = "/register_user")
    public void upploadUser(@RequestBody UsuarioDto user) {
        this.service.upploadUser(user);
    }
}
