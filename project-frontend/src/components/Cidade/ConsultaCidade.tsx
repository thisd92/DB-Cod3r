import { useEffect, useState } from "react";
import { Cidade } from "../../models/Cidade";
import { get, del } from "../../services/service";
import { BtnCid } from "../Buttons";
import "../../assets/css/table.css";

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

    return (
        <div>
            <button onClick={getCidade}>Buscar</button>
            <button onClick={() => setCidades([])}>Limpar</button>
            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cidade</th>
                            <th>Área (km²)</th>
                            <th>Estado ID</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cidades.map((cidade, index) => (
                            <tr key={index}>
                                <td>{cidade?.id}</td>
                                <td>{cidade?.nome}</td>
                                <td>{cidade?.area}</td>
                                <td>{cidade?.estado_id}</td>
                                <td><BtnCid cidId={cidade.id}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}


export default ConsultaCidade;