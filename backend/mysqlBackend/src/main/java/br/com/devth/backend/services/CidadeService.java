package br.com.devth.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devth.backend.entities.Cidade;
import br.com.devth.backend.repositories.CidadeRepository;

@Service
public class CidadeService {
	
	@Autowired
	private CidadeRepository repository;
	
	public List<Cidade> findAll(){
		return repository.findAll();
	}
	
	public Optional<Cidade> findById(Integer id){
		return repository.findById(id);
	}
	
	public Cidade saveCity(Cidade cidade) {
		return repository.save(cidade);
	}
	
	public void deleteCity(Integer id) {
		repository.deleteById(id);;
	}
	
	public Cidade updateCity(Integer id, Cidade cidade) {
		Cidade entity = repository.getReferenceById(id);
		updateData(entity, cidade);
		return repository.save(entity);
	}

	private void updateData(Cidade entity, Cidade cidade) {
		entity.setNome(cidade.getNome());
		entity.setEstado_id(cidade.getEstado_id());
		entity.setArea(cidade.getArea());
	}
}
