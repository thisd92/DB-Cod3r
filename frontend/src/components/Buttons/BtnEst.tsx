import { del } from '../../services/service';
import { AiFillDelete } from 'react-icons/ai'

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
        <button onClick={() => handleClick(estId)}><AiFillDelete /></button>
    )
}

export default BtnEst;