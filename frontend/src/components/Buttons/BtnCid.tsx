import { del } from '../../services/service';
import { AiFillDelete } from 'react-icons/ai'

type Props = {
    cidId?: number;
}

function handleClick(id: number | undefined){
    del(`/cidades/${id}`)
    .then(resp => {
        alert('Cidade excluída com sucesso');
    });
}

function BtnCid( {cidId} : Props ){
    return(
        <button onClick={() => handleClick(cidId)}><AiFillDelete /></button>
    )
}

export default BtnCid;