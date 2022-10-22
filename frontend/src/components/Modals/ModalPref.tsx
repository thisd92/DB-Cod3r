import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-modal';
import { Prefeito } from '../../models/Prefeito';
import { get } from '../../services/service';
import { BASE_URL } from '../../utils/request';
import { AiFillEdit } from 'react-icons/ai'

type Props = {
    prefId?: number
}

const ModalPref = ({ prefId }: Props) => {

    const prevPrefeito = {
        nome: '',
        cidade_id: 0
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

    const [prefeito, setPrefeito] = useState<Prefeito>(prevPrefeito)

    Modal.setAppElement('#root');
    let subtitle;

    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
        console.log(prefId)
    }

    function afterOpenModal() {
        get(`/prefeitos/${prefId}`)
            .then(resp => {
                setPrefeito(resp.data)
            })
    }

    function closeModal() {
        setIsOpen(false)
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        axios.put(`${BASE_URL}/prefeitos/${prefId}`, prefeito)
        alert('Prefeito Atualizado com Sucesso!')
        closeModal()
    }

    const handleNameChange = (e: any) => {
        const { name } = e.target
        setPrefeito({ ...prefeito, [name]: e.target.value })
    }

    const handleIdChange = (e: any) => {
        const { name } = e.target
        setPrefeito({ ...prefeito, [name]: e.target.value })
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
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Atualizar Prefeito</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="Id">ID</label>
                        <input type="text" value={prefeito.id} readOnly />
                    </div>
                    <div className="form-control">
                        <label htmlFor="Nome">Nome</label>
                        <input type="text" name="nome" value={prefeito.nome} onChange={handleNameChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="Estado_id">Cidade ID</label>
                        <input type="number" value={prefeito.cidade_id} name="cidade_id" onChange={handleIdChange} />
                    </div>
                    <div className="form-control">
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default ModalPref;