import "../../assets/css/form.css";

const FormCidade = () => {
    return (
        <div className="form-wrapper">
            <h4>Cadastro de Cidade</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="Id">ID</label>
                    <input type="text" />
                </div>
                <div className="form-control">
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" />
                </div>
                <div className="form-control">
                    <label htmlFor="Area">Área</label>
                    <input type="number" />
                </div>
                <div className="form-control">
                    <label htmlFor="Estado_id">Estado ID</label>
                    <input type="number" />
                </div>
            </form>
        </div>
    )
}

export default FormCidade;