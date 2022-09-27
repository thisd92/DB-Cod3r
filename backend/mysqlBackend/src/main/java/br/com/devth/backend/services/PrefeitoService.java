package br.com.devth.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devth.backend.entities.Prefeito;
import br.com.devth.backend.repositories.PrefeitoRepository;

@Service
public class PrefeitoService {

	@Autowired
	private PrefeitoRepository repository;
	
	public List<Prefeito> findAll(){
		return repository.findAll();
	}
	
	public Prefeito savePrefeito(Prefeito prefeito) {
		return repository.save(prefeito);
	}
	
	public void deleteMayor(Integer id) {
		repository.deleteById(id);;
	}
	
	public Prefeito updateMayor(Integer id, Prefeito prefeito) {
		Prefeito entity = repository.getReferenceById(id);
		updateData(entity, prefeito);
		return repository.save(entity);
	}

	private void updateData(Prefeito entity, Prefeito prefeito) {
		entity.setNome(prefeito.getNome());
		entity.setCidade_id(prefeito.getCidade_id());
	}
}
