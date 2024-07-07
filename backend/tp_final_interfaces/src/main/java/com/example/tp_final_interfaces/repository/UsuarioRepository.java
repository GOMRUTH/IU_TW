package com.example.tp_final_interfaces.repository;

import com.example.tp_final_interfaces.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    @Query(value = "SELECT * FROM usuarios U"
            + " WHERE email = :email"
            + " AND password = crypt(:password, password)",
            nativeQuery = true)
    Optional<Usuario> checkCredentials(@Param("email") String email,
                                       @Param("password") String password);
}
