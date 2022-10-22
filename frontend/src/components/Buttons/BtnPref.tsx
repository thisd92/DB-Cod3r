import { del } from '../../services/service';
import { AiFillDelete } from 'react-icons/ai'

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
        <button onClick={() => handleClick(prefId)}><AiFillDelete /></button>
    )
}

export default BtnPref;