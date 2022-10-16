import { BASE_URL } from '../../utils/request';
import { del } from '../../services/service';

type Props = {
    estId?: number;
}

function handleClick(id: number | undefined){
    del(`/estados/${id}`)
    .then(resp => {
        alert('Estado excluído com sucesso');
    });
}

function BtnEst( {estId} : Props ){
    return(
        <button onClick={() => handleClick(estId)}>Excluir</button>
    )
}

export default BtnEst;