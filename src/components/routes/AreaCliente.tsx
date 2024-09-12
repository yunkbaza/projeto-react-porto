import "../routes.css"
import { Link } from "react-router-dom"

const AreaCliente = () => {
    return(
    <div>
    <header>
        <img src="../img/logo.png" alt="Logo PORTO"/>
    </header>
    <div id="acesso">
        <div className="container">
            <div className="back-arrow">
                <Link to="/">
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>
            </div>
            <h1>Acessar Conta</h1>
            <p>Preencha seus dados de acesso para continuar.</p>
            <input type="text" placeholder="CPF ou CNPJ"/>
            <button type="button" disabled>Entrar <span className="button-icon">
                    <i className="fa-solid fa-arrow-right"></i>
                </span></button>
            <div className="options">
                <label>
                    <input type="checkbox"/> Lembrar meu CPF para próximos acessos.
                </label>
                <p>Ainda não tem sua conta Porto Seguro?
                <Link to="/criarconta">Crie uma agora mesmo :)</Link>
                </p>
            </div>
        </div>
    </div>
    </div>
    
    )

}

export default AreaCliente