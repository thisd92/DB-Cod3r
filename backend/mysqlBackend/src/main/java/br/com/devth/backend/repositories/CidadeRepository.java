package br.com.devth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devth.backend.entities.Cidade;

public interface CidadeRepository extends JpaRepository<Cidade, Integer>{

}
