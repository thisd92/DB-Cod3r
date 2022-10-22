import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-modal';
import { Cidade } from '../../models/Cidade';
import { get } from '../../services/service';
import { BASE_URL } from '../../utils/request';
import { AiFillEdit } from 'react-icons/ai';

type Props = {
    cidadeId?: number
}

const ModalCidade = ({ cidadeId }: Props) => {

    const prevCidade = {
        nome: '',
        area: 0,
        estado_id: 0
    }

    const [cidade, setCidade] = useState<Cidade>(prevCidade)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    Modal.setAppElement('#root');
    let subtitle;

    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function afterOpenModal() {
        get(`/cidades/${cidadeId}`)
            .then(resp => {
                setCidade(resp.data)
            })
    }

    function closeModal() {
        setIsOpen(false)
    }

    const handleNameChange = (e: any) => {
        const { name } = e.target
        setCidade({ ...cidade, [name]: e.target.value })
    }

    const handleAreaChange = (e: any) => {
        const { name } = e.target
        setCidade({ ...cidade, [name]: e.target.value })
    }

    const handleIdChange = (e: any) => {
        const { name } = e.target
        setCidade({ ...cidade, [name]: e.target.value })
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        axios.post(`${BASE_URL}/cidades`, cidade)
        alert('Cidade Cadastrada com Sucesso!')
        setCidade(prevCidade)
    }

    return (
        <div>
            <button onClick={openModal}><AiFillEdit /></button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Modal Atualizar"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Atualizar Cidade</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="Id">ID</label>
                        <input type="text" value={cidade.id} readOnly />
                    </div>
                    <div className="form-control">
                        <label htmlFor="Nome">Nome</label>
                        <input type="text" name="nome" value={cidade.nome} onChange={handleNameChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="Area">Área</label>
                        <input type="number" name="area" value={cidade.area} onChange={handleAreaChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="Estado_id">Estado ID</label>
                        <input type="number" name="estado_id" value={cidade.estado_id} onChange={handleIdChange} />
                    </div>
                    <div className="form-control">
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default ModalCidade;