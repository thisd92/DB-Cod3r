import { useState } from "react";
import ConsultaCidade from "./ConsultaCidade";
import FormCidade from "./FormCidade";

const Cidades = () => {
    const [topic, setTopic] = useState(0);

    return (
        <div>
            <button onClick={() => setTopic(1)}>Consultar</button>
            <button onClick={() => setTopic(2)}>Cadastrar</button>
            <button onClick={() => setTopic(3)}>Atualizar</button>
            <button onClick={() => setTopic(4)}>Deletar</button>
            {topic === 1 && <ConsultaCidade />}
            {topic === 2 && <FormCidade />}
        </div>
    )
}

export default Cidades;