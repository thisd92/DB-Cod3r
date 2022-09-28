import { useState } from "react";
import ConsultaPrefeito from "./ConsultaPrefeito";
import FormPrefeito from "./FormPrefeito";

const Prefeitos = () => {
    const [topic, setTopic] = useState(0);

    return(
        <div>
            <button onClick={() => setTopic(1)}>Consultar</button>
            <button onClick={() => setTopic(2)}>Cadastrar</button>
            <button onClick={() => setTopic(3)}>Atualizar</button>
            <button onClick={() => setTopic(4)}>Deletar</button>
            {topic === 1 && <ConsultaPrefeito />}
            {topic === 2 && <FormPrefeito />}
        </div>
    )
}

export default Prefeitos;