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

import br.com.devth.backend.entities.Prefeito;
import br.com.devth.backend.services.PrefeitoService;

@RestController
@RequestMapping("/prefeitos")
public class PrefeitoController {
	
	@Autowired
	private PrefeitoService service;
	
	@GetMapping
	public ResponseEntity<List<Prefeito>> findAll(){
		List<Prefeito> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	public ResponseEntity<Prefeito> saveMayor(@RequestBody Prefeito prefeito){
		prefeito = service.savePrefeito(prefeito);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(prefeito.getId()).toUri();
		return ResponseEntity.created(uri).body(prefeito);
	}
	
	@DeleteMapping(value="/{id}")
	public ResponseEntity<Prefeito> deleteMayor(@PathVariable Integer id){
		service.deleteMayor(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<Prefeito> udpdateMayor(@PathVariable Integer id, @RequestBody Prefeito prefeito){
		prefeito = service.updateMayor(id, prefeito);
		return ResponseEntity.ok().body(prefeito);
	}

}
