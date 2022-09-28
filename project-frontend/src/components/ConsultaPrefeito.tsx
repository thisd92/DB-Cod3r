import { useEffect, useState } from "react";
import { Prefeito } from "../models/Prefeito";
import { get } from "../services/service";

const ConsultaCidade = () => {

    const [prefeitos, setPrefeitos] = useState<Prefeito[]>([]);

    useEffect(() => {

    })

    function getPrefeitos() {
        get('/prefeitos')
            .then(resp => {
                setPrefeitos(resp.data)
            })
    }

    return (
        <div>
            <button onClick={getPrefeitos}>Consultar</button>
            <button onClick={() => setPrefeitos([])}>Limpar</button>
            <table>
                <thead>
                    <tr>
                        <th>Prefeito</th>
                        <th>Cidade ID</th>
                    </tr>
                </thead>
                <tbody>
                    {prefeitos.map((prefeito, index) => (
                        <tr key={index}>
                            <td>{prefeito?.nome}</td>
                            <td>{prefeito?.cidade_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default ConsultaCidade;