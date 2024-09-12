import "./Botao.css"
import { Link } from "react-router-dom";

function Botao() {

    return(
        <div className="btn_login">
            <ul className="btn_bar">
                <li>
                    <Link to="/areacliente">Área do Cliente</Link>
                </li>
            </ul>
        </div>
    )
}

export default Botao