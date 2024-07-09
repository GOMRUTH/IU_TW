package com.example.tp_final_interfaces.service.implementation;

import com.example.tp_final_interfaces.dto.UsuarioCredencialesDto;
import com.example.tp_final_interfaces.dto.UsuarioDto;
import com.example.tp_final_interfaces.dto.UsuarioNoPasswordDto;
import com.example.tp_final_interfaces.mapper.UsuarioMapper;
import com.example.tp_final_interfaces.model.Usuario;
import com.example.tp_final_interfaces.repository.UsuarioRepository;
import com.example.tp_final_interfaces.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class UsuarioService implements IUsuarioService {
    @Autowired
    private UsuarioRepository repository;

    @Override
    public Optional<Usuario> findUserById(Integer id) {
        return this.repository.findById(id);
    }

    @Override
    public Optional<UsuarioNoPasswordDto> checkAuthoritation(UsuarioCredencialesDto credenciales) {
        Optional<Usuario> user = this.repository.checkCredentials(credenciales.getEmail(), credenciales.getPassword());
        if(user.isPresent()) {
            return Optional.of(UsuarioMapper.usuarioToUsuarioDto(user.get()));
        }
        return Optional.empty();
    }

    @Override
    public void upploadUser(UsuarioDto user) {
        if(this.repository.findByUsername(user.getUsername()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "El nombre de usuario ya existe");
        }

        if(this.repository.findByEmail(user.getEmail()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Ya existe una cuenta asociada a la dirección email");
        }

        this.repository.upploadUser(user.getNombreUsuario(),
                user.getApellidoUsuario(),
                user.getUsername(),
                user.getEmail(),
                user.getPassword());
    }
}
