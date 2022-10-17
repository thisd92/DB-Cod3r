import axios from "axios";
import { useState } from "react";
import "../../assets/css/form.css";
import { Prefeito } from "../../models/Prefeito";
import { save } from "../../services/service";
import { BASE_URL } from "../../utils/request";

const FormPrefeito = () => {

    const prevPrefeito = {
        nome: '',
        cidade_id: 0
    }
    const [prefeito, setPrefeito] = useState<Prefeito>(prevPrefeito)

    const handleNameChange = (e: any) => {
        const {name} = e.target
        setPrefeito({ ...prefeito, [name]: e.target.value})
    }

    const handleIdChange = (e: any) => {
        const {name} = e.target
        setPrefeito({ ...prefeito, [name]: e.target.value})
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        axios.post(`${BASE_URL}/prefeitos`, prefeito)
        alert('Prefeito Cadastrado com Sucesso!')
        setPrefeito(prevPrefeito)  
    }

    return (
        <div className="form-wrapper">
            <h4>Cadastro de Prefeito</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="Id">ID</label>
                    <input type="text" readOnly />
                </div>
                <div className="form-control">
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" name="nome" value={prefeito.nome} onChange={handleNameChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="Estado_id">Cidade ID</label>
                    <input type="number" value={prefeito.cidade_id} name="cidade_id" onChange={handleIdChange}/>
                </div>
                <div className="form-control">
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default FormPrefeito;