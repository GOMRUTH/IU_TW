package com.example.tp_final_interfaces.repository;

import com.example.tp_final_interfaces.model.GeneroLibro;
import com.example.tp_final_interfaces.model.composite_primary_keys.GeneroLibroId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GeneroLibroRepository extends JpaRepository<GeneroLibro, GeneroLibroId> {
}
