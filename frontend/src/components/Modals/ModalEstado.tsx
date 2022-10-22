import axios from 'axios';
import { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import Modal from 'react-modal';
import { Estado } from '../../models/Estado';
import { get } from '../../services/service';
import { BASE_URL } from '../../utils/request';

type Props = {
    estadoId?: number
}

const ModalEstado = ({ estadoId }: Props) => {

    const prevEstado = {
        nome: '',
        regiao: '',
        populacao: 0
    }

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

    const [estado, setEstado] = useState<Estado>(prevEstado)

    Modal.setAppElement('#root');
    let subtitle;

    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
        console.log(estadoId)
    }

    function afterOpenModal() {
        get(`/estados/${estadoId}`)
            .then(resp => {
                setEstado(resp.data)
            })
    }

    function closeModal() {
        setIsOpen(false)
    }

    const handleNameChange = (e: any) => {
        const { name } = e.target
        setEstado({ ...estado, [name]: e.target.value })
    }

    const handleRegiaoChange = (e: any) => {
        const { name } = e.target
        setEstado({ ...estado, [name]: e.target.value })
    }

    const handlePopulacaoChange = (e: any) => {
        const { name } = e.target
        setEstado({ ...estado, [name]: e.target.value })
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        axios.post(`${BASE_URL}/estados`, estado)
        alert('Estado Cadastrado com Sucesso!')
        setEstado(prevEstado)
        closeModal()
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
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Atualizar Estado</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="Id">ID</label>
                        <input type="text" value={estado.id} readOnly />
                    </div>
                    <div className="form-control">
                        <label htmlFor="Nome">Nome</label>
                        <input type="text" name="nome" value={estado.nome} onChange={handleNameChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="Area">Região</label>
                        <input type="text" name="regiao" value={estado.regiao} onChange={handleRegiaoChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="Estado_id">População</label>
                        <input type="number" name="populacao" value={estado.populacao} onChange={handlePopulacaoChange} />
                    </div>
                    <div className="form-control">
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default ModalEstado;