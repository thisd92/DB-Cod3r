package br.com.devth.backend.controllers;

import java.net.URI;
import java.util.List;
import java.util.Optional;

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

import br.com.devth.backend.entities.Estado;
import br.com.devth.backend.services.EstadoService;

@RestController
@RequestMapping("/estados")
public class EstadoController {

	@Autowired
	private EstadoService service;
	
	@GetMapping
	public ResponseEntity<List<Estado>> findAll(){
		List<Estado> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value="/{id}")
	public ResponseEntity<Optional<Estado>> findById(@PathVariable Integer id, @RequestBody Optional<Estado> estado){
		estado = service.findById(id);
		return ResponseEntity.ok().body(estado);
	}
	
	@PostMapping
	public ResponseEntity<Estado> saveEstado(@RequestBody Estado estado){
		estado = service.saveEstado(estado);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(estado.getId()).toUri();
		return ResponseEntity.created(uri).body(estado);
	}
	
	@DeleteMapping(value="/{id}")
	public ResponseEntity<Estado> deleteCity(@PathVariable Integer id){
		service.deleteEstado(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<Estado> udpdateEstado(@PathVariable Integer id, @RequestBody Estado estado){
		estado = service.updateEstado(id, estado);
		return ResponseEntity.ok().body(estado);
	}
}
