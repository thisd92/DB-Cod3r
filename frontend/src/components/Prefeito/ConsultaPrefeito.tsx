import { useEffect, useState } from "react";
import { Prefeito } from "../../models/Prefeito";
import { get } from "../../services/service";
import { BtnPref } from "../Buttons";
import "../../assets/css/table.css";
import { ModalPref } from "../Modals";

const ConsultaPrefeito = () => {

    const [prefeitos, setPrefeitos] = useState<Prefeito[]>([]);

    useEffect(() => {
        getPrefeitos
    }, [prefeitos])

    function getPrefeitos() {
        get('/prefeitos')
            .then(resp => {
                setPrefeitos(resp.data)
            })
    }

    const styleTD = {
        display: 'flex'
    }

    return (
        <div>
            <button onClick={getPrefeitos}>Buscar</button>
            <button onClick={() => setPrefeitos([])}>Limpar</button>
            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Prefeito</th>
                            <th>Cidade ID</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prefeitos.map((prefeito, index) => (
                            <tr key={index}>
                                <td>{prefeito?.id}</td>
                                <td>{prefeito?.nome}</td>
                                <td>{prefeito?.cidade_id}</td>
                                <td>
                                    <div style={styleTD}>
                                        <ModalPref prefId={prefeito.id} />
                                        <BtnPref prefId={prefeito.id} />
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


export default ConsultaPrefeito;