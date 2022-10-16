import axios from "axios";
import { useState } from "react";
import "../../assets/css/form.css";
import { Cidade } from "../../models/Cidade";
import { BASE_URL } from "../../utils/request";

const FormCidade = () => {
    
    const prevCidade = {
        nome: '',
        area: 0,
        estado_id: 0
    }
    const [cidade, setCidade] = useState<Cidade>(prevCidade)

    const handleNameChange = (e: any) => {
        const { name } = e.target
        setCidade({ ...cidade, [name]: e.target.value })
    }

    const handleAreaChange = (e: any) => {
        const { name } = e.target
        setCidade({ ...cidade, [name]: e.target.value })
    }

    const handleIdChange = (e: any) => {
        const { name } = e.target
        setCidade({ ...cidade, [name]: e.target.value })
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        axios.post(`${BASE_URL}/cidades`, cidade)
        alert('Cidade Cadastrada com Sucesso!')
        setCidade(prevCidade)
    }

    return (
        <div className="form-wrapper">
            <h4>Cadastro de Cidade</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="Id">ID</label>
                    <input type="text" readOnly />
                </div>
                <div className="form-control">
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" name="nome" value={cidade.nome} onChange={handleNameChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="Area">Área</label>
                    <input type="number" name="area" value={cidade.area} onChange={handleAreaChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="Estado_id">Estado ID</label>
                    <input type="number" name="estado_id" value={cidade.estado_id} onChange={handleIdChange}/>
                </div>
                <div className="form-control">
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default FormCidade;