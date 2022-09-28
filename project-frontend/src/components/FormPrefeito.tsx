const FormPrefeito = () => {
    return (
        <div>
            <h4>Cadastro de Prefeito</h4>
            <form>
                <div>
                    <label htmlFor="Id">ID</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Estado_id">Cidade ID</label>
                    <input type="number" />
                </div>
            </form>
        </div>
    )
}

export default FormPrefeito;