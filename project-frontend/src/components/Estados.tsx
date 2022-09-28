import { useState } from "react";
import ConsultaEstado from "./ConsultaEstado";
import FormEstado from "./FormEstado";

const Estados = () => {
    const [topic, setTopic] = useState(0);

    return(
        <div>
            <button onClick={() => setTopic(1)}>Consultar</button>
            <button onClick={() => setTopic(2)}>Cadastrar</button>
            <button onClick={() => setTopic(3)}>Atualizar</button>
            <button onClick={() => setTopic(4)}>Deletar</button>
            {topic === 1 && <ConsultaEstado />}
            {topic === 2 && <FormEstado />}
        </div>
    )
}

export default Estados;