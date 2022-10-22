import { useState } from "react";
import ConsultaEstado from "./ConsultaEstado";
import FormEstado from "./FormEstado";

const Estados = () => {
    const [topic, setTopic] = useState(0);

    return(
        <div>
            <button className={topic == 1 ? 'active' : ''} onClick={() => setTopic(1)}>Consultar</button>
            <button className={topic == 2 ? 'active' : ''} onClick={() => setTopic(2)}>Cadastrar</button>
            {topic === 1 && <ConsultaEstado />}
            {topic === 2 && <FormEstado />}
        </div>
    )
}

export default Estados;