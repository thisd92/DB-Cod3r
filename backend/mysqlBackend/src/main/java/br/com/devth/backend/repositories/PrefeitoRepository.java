package br.com.devth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devth.backend.entities.Prefeito;

public interface PrefeitoRepository extends JpaRepository<Prefeito, Integer> {

}
