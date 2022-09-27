package br.com.devth.backend.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.devth.backend.entities.Cidade;
import br.com.devth.backend.services.CidadeService;

@RestController
@RequestMapping(value = "/cidades")
public class CidadeController {

	@Autowired
	private CidadeService service;

	@GetMapping
	public ResponseEntity<List<Cidade>> findAll() {
		List<Cidade> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@PostMapping
	public ResponseEntity<Cidade> saveCity(@RequestBody Cidade cidade) {
		cidade = service.saveCity(cidade);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(cidade.getId()).toUri();
		return ResponseEntity.created(uri).body(cidade);
	}
	
	@DeleteMapping(value="/{id}")
	public ResponseEntity<Cidade> deleteCity(@PathVariable Integer id){
		service.deleteCity(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<Cidade> udpdateCity(@PathVariable Integer id, @RequestBody Cidade cidade){
		cidade = service.updateCity(id, cidade);
		return ResponseEntity.ok().body(cidade);
	}
	
}
