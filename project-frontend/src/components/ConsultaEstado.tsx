import { useEffect, useState } from "react";
import { get } from "../services/service";
import { Estado } from "../models/Estado";

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
            <button onClick={getEstados}>Consultar</button>
            <button onClick={() => setEstados([])}>Limpar</button>
            <table>
                <thead>
                    <tr>
                        <th>Estado</th>
                        <th>Região</th>
                        <th>População</th>
                    </tr>
                </thead>
                <tbody>
                    {estados.map((estado, index) => (
                        <tr key={index}>
                            <td>{estado?.nome}</td>
                            <td>{estado?.regiao}</td>
                            <td>{estado?.populacao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default ConsultaEstado;