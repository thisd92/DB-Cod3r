import { useEffect, useState } from "react";
import { get } from "../../services/service";
import { Estado } from "../../models/Estado";
import { BtnEst } from "../Buttons";
import "../../assets/css/table.css";
import { ModalEstado } from "../Modals";

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

    const styleTD = {
        display: 'flex'
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

                                <td>
                                    <div style={styleTD}>
                                        <ModalEstado estadoId={estado.id} />
                                        <BtnEst estId={estado.id} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}


export default ConsultaEstado;