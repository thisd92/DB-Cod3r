import axios from "axios";
import { useEffect, useState } from "react";
import "../../assets/css/form.css";
import { Estado } from "../../models/Estado";
import { BASE_URL } from "../../utils/request";

const FormEstado = () => {

    const prevEstado = {
        nome: '',
        regiao: '',
        populacao: 0
    }
    const [estado, setEstado] = useState<Estado>(prevEstado)

    useEffect(() => {
        setEstado(prevEstado)
    }, [])

    const handleNameChange = (e: any) => {
        const { name } = e.target
        setEstado({ ...estado, [name]: e.target.value })
    }

    const handleRegiaoChange = (e: any) => {
        const { name } = e.target
        setEstado({ ...estado, [name]: e.target.value })
    }

    const handlePopulacaoChange = (e: any) => {
        const { name } = e.target
        setEstado({ ...estado, [name]: e.target.value })
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        axios.post(`${BASE_URL}/estados`, estado)
        alert('Estado Cadastrado com Sucesso!')
        setEstado(prevEstado)
    }

    return (
        <div className="form-wrapper">
            <h4>Cadastro de Estado</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="Id">ID</label>
                    <input type="text" readOnly />
                </div>
                <div className="form-control">
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" name="nome" value={estado.nome} onChange={handleNameChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="Area">Região</label>
                    <input type="text" name="regiao" value={estado.regiao} onChange={handleRegiaoChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="Estado_id">População</label>
                    <input type="number" name="populacao" value={estado.populacao} onChange={handlePopulacaoChange} />
                </div>
                <div className="form-control">
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default FormEstado;