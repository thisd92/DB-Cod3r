import { useEffect, useState } from "react";
import { Cidade } from "../models/Cidade";
import { get, del } from "../services/service";

const ConsultaCidade = () => {

    const [cidades, setCidades] = useState<Cidade[]>([]);

    useEffect(() => {

    })

    function getCidade() {
        get('/cidades')
            .then(resp => {
                setCidades(resp.data)
            })
    }

    function removerCidade(cidade: Cidade) {
        del(`/cidades/${cidade.id}`)

    }

    return (
        <div>
            <button onClick={getCidade}>Buscar</button>
            <button onClick={() => setCidades([])}>Limpar</button>
            <table>
                <thead>
                    <tr>
                        <th>Cidade</th>
                        <th>Área (km²)</th>
                        <th>Estado ID</th>
                    </tr>
                </thead>
                <tbody>
                    {cidades.map((cidade, index) => (
                        <tr key={index}>
                            <td>{cidade?.nome}</td>
                            <td>{cidade?.area}</td>
                            <td>{cidade?.estado_id}</td>
                            <td><button>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default ConsultaCidade;