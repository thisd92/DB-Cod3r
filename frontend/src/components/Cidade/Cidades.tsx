import { useState } from "react";
import ConsultaCidade from "./ConsultaCidade";
import FormCidade from "./FormCidade";

const Cidades = () => {
    const [topic, setTopic] = useState(0);

    return (
        <div>
            <button className={topic == 1 ? 'active' : ''} onClick={() => setTopic(1)}>Consultar</button>
            <button className={topic == 2 ? 'active' : ''} onClick={() => setTopic(2)}>Cadastrar</button>
            {topic === 1 && <ConsultaCidade />}
            {topic === 2 && <FormCidade />}
        </div>
    )
}

export default Cidades;