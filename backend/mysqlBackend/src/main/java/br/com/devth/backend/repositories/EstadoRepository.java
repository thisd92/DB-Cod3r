package br.com.devth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devth.backend.entities.Estado;

public interface EstadoRepository extends JpaRepository<Estado, Integer> {

}
