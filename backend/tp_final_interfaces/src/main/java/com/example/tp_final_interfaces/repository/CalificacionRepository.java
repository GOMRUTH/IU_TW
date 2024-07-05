package com.example.tp_final_interfaces.repository;

import com.example.tp_final_interfaces.model.Calificacion;
import com.example.tp_final_interfaces.model.composite_primary_keys.CalificacionId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CalificacionRepository extends JpaRepository<Calificacion, CalificacionId> {
}
