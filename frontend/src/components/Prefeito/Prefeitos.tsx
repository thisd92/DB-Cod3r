import { useState } from "react";
import ConsultaPrefeito from "./ConsultaPrefeito";
import FormPrefeito from "./FormPrefeito";

const Prefeitos = () => {
    const [topic, setTopic] = useState(0);

    return(
        <div>
            <button className={topic == 1 ? 'active' : ''} onClick={() => setTopic(1)}>Consultar</button>
            <button className={topic == 2 ? 'active' : ''} onClick={() => setTopic(2)}>Cadastrar</button>
            {topic === 1 && <ConsultaPrefeito />}
            {topic === 2 && <FormPrefeito />}
        </div>
    )
}

export default Prefeitos;