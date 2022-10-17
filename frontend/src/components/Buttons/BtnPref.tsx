import { BASE_URL } from '../../utils/request';
import { del } from '../../services/service';

type Props = {
    prefId?: number;
}

function handleClick(id: number | undefined){
    del(`/prefeitos/${id}`)
    .then(resp => {
        alert('Prefeito excluído com sucesso');
    });
}

function BtnPref( {prefId} : Props ){
    return(
        <button onClick={() => handleClick(prefId)}>Excluir</button>
    )
}

export default BtnPref;