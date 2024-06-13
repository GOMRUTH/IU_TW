package com.example.tp_final_interfaces.repository;

import com.example.tp_final_interfaces.model.Genero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GeneroRepository extends JpaRepository<Genero, Integer> {
}
