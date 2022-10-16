import { BASE_URL } from '../../utils/request';
import { del } from '../../services/service';

type Props = {
    cidId: number;
}

function handleClick(id: number){
    del(`/cidades/${id}`)
    .then(resp => {
        alert('Cidade excluída com sucesso');
    });
}

function BtnCid( {cidId} : Props ){
    return(
        <button onClick={() => handleClick(cidId)}>Excluir</button>
    )
}

export default BtnCid;