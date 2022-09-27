package br.com.devth.backend.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="prefeitos")
public class Prefeito implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private Integer cidade_id;
	
	public Prefeito() {
		
	}
	
	public Prefeito(Integer id, String nome, Integer cidade_id) {
		super();
		this.id = id;
		this.nome = nome;
		this.cidade_id = cidade_id;
	}
	
	public Prefeito(String nome, Integer cidade_id) {
		this.nome = nome;
		this.cidade_id = cidade_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getCidade_id() {
		return cidade_id;
	}

	public void setCidade_id(Integer cidade_id) {
		this.cidade_id = cidade_id;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Prefeito [id=" + id + ", nome=" + nome + ", cidade_id=" + cidade_id + "]";
	}
	
	
}
