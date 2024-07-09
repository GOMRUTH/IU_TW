package com.example.tp_final_interfaces.repository;

import com.example.tp_final_interfaces.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    @Query(value = "SELECT * FROM usuarios U"
            + " WHERE email = :email"
            + " AND password = crypt(:password, password)",
            nativeQuery = true)
    Optional<Usuario> checkCredentials(@Param("email") String email,
                                       @Param("password") String password);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO usuarios (nombre_usuario, apellido_usuario, username, email, password)"
            + " VALUES (:firstname, :lastname, :username, :email, crypt(:password, gen_salt('bf')))",
            nativeQuery = true)
    void upploadUser(@Param("firstname")String nombre,
                     @Param("lastname")String apellido,
                     @Param("username")String nombreUsuario,
                     @Param("email")String email,
                     @Param("password")String password);

    Optional<Usuario> findByUsername(String username);

    Optional<Usuario> findByEmail(String email);
}
