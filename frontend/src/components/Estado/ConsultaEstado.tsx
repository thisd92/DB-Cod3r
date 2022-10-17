import { useEffect, useState } from "react";
import { get } from "../../services/service";
import { Estado } from "../../models/Estado";
import { BtnEst } from "../Buttons";
import "../../assets/css/table.css";

const ConsultaEstado = () => {

    const [estados, setEstados] = useState<Estado[]>([]);

    useEffect(() => {

    })

    function getEstados() {
        get('/estados')
            .then(resp => {
                setEstados(resp.data)
            })
    }

    return (
        <div>
            <button onClick={getEstados}>Buscar</button>
            <button onClick={() => setEstados([])}>Limpar</button>
            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Estado</th>
                            <th>Região</th>
                            <th>População</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estados.map((estado, index) => (
                            <tr key={index}>
                                <td>{estado?.id}</td>
                                <td>{estado?.nome}</td>
                                <td>{estado?.regiao}</td>
                                <td>{estado?.populacao}</td>
                                <td><BtnEst estId={estado.id}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}


export default ConsultaEstado;