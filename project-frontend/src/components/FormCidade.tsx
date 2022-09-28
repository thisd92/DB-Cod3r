const FormCidade = () => {

    return (
        <div>
            <h4>Cadastro de Cidade</h4>
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
                    <label htmlFor="Area">Área</label>
                    <input type="number" />
                </div>
                <div>
                    <label htmlFor="Estado_id">Estado ID</label>
                    <input type="number" />
                </div>
            </form>
        </div>
    )
}

export default FormCidade;