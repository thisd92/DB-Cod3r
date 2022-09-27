package br.com.devth.backend.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cidades")
public class Cidade implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private Double area;
	private Integer estado_id;

	public Cidade() {

	}

	public Cidade(Integer id, String nome, Double area, Integer estado_id) {
		super();
		this.id = id;
		this.nome = nome;
		this.area = area;
		this.estado_id = estado_id;
	}

	public Cidade(String nome, Double area, Integer estado_id) {
		this.nome = nome;
		this.area = area;
		this.estado_id = estado_id;
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

	public Double getArea() {
		return area;
	}

	public void setArea(Double area) {
		this.area = area;
	}

	public Integer getEstado_id() {
		return estado_id;
	}

	public void setEstado_id(Integer estado_id) {
		this.estado_id = estado_id;
	}

	@Override
	public String toString() {
		return "Cidade [id=" + id + ", nome=" + nome + ", area=" + area + ", estado_id=" + estado_id + "]";
	}
}
