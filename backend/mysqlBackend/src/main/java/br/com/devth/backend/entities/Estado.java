package br.com.devth.backend.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="estados")
public class Estado implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String nome, regiao;
	private Double populacao;
	
	public Estado() {
		
	}

	public Estado(int id, String nome, String regiao, Double populacao) {
		super();
		this.id = id;
		this.nome = nome;
		this.regiao = regiao;
		this.populacao = populacao;
	}
	
	public Estado(String nome, String regiao, Double populacao) {
		this.nome = nome;
		this.regiao = regiao;
		this.populacao = populacao;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getRegiao() {
		return regiao;
	}

	public void setRegiao(String regiao) {
		this.regiao = regiao;
	}

	public Double getPopulacao() {
		return populacao;
	}

	public void setPopulacao(Double populacao) {
		this.populacao = populacao;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Estado [id=" + id + ", nome=" + nome + ", regiao=" + regiao + ", populacao=" + populacao + "]";
	}
	
	
}
