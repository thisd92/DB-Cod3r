package br.com.devth.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devth.backend.entities.Estado;
import br.com.devth.backend.repositories.EstadoRepository;

@Service
public class EstadoService {
	
	@Autowired
	private EstadoRepository repository;
	
	public List<Estado> findAll(){
		return repository.findAll();
	}
	
	public Estado saveEstado(Estado estado){
		return repository.save(estado);
	}
	
	public void deleteEstado(Integer id) {
		repository.deleteById(id);;
	}
	
	public Estado updateEstado(Integer id, Estado estado) {
		Estado entity = repository.getReferenceById(id);
		updateData(entity, estado);
		return repository.save(entity);
	}

	private void updateData(Estado entity, Estado estado) {
		entity.setNome(estado.getNome());
		entity.setRegiao(estado.getRegiao());
		entity.setPopulacao(estado.getPopulacao());
	}
}
