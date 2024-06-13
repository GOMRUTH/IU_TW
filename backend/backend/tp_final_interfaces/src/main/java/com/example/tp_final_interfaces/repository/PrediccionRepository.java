package com.example.tp_final_interfaces.repository;

import com.example.tp_final_interfaces.model.Prediccion;
import com.example.tp_final_interfaces.model.composite_primary_keys.PrediccionId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrediccionRepository extends JpaRepository<Prediccion, PrediccionId> {
}
