import "../routes.css"
import { Link } from "react-router-dom"

const CriarConta = () => {

    return(
    <div>
    <header>
        <img src="../img/logo.png" alt="Logo PORTO" />
    </header>

    <div id="acesso">
        <div className="container">
            <div className="back-arrow">
                <Link to="/areacliente"><i className="fa-solid fa-arrow-left"/></Link>
            </div>
            <h1>Criar Conta</h1>
            <p>Preencha seus dados de acesso para continuar.</p>
            <input type="text" placeholder="CPF ou CNPJ" />
            <button type="button" disabled>Cadastrar<span className="button-icon">
                    <i className="fa-solid fa-arrow-right"></i>
                </span></button>
            </div>
        </div>
    </div>

    )
}

export default CriarConta