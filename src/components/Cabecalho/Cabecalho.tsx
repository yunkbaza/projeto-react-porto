import "./Cabecalho.css"
import  Botao from "../Botao/Botao";

function Cabecalho() {
    return(
    <header>
        <div id="top">
            <img src="../img/logo.png" alt="Logo Porto" />
            <nav className="nav_bar">
                <ul className="top-list">
                    <li><a href="https://www.portoseguro.com.br/institucional/sobre-a-porto-seguro" className="top-link">Sobre nós</a></li>
                    <li><a href="https://www.portoseguro.com.br/canal-de-ajuda" className="top-link">Ajuda</a></li>
                    <li><a href="https://blog.portoseguro.com.br/?_gl=1*1i8d1h1*_gcl_au*MTIzMTkxODM3OS4xNzI0OTUyNzY0*_ga*OTcyNzg2OTMuMTcyNDk1Mjc2NA..*_ga_S9FTJ8D526*MTcyNDk1Mjc2NC4xLjEuMTcyNDk1MzM0My42MC4wLjA." className="top-link">Blog</a></li>
                    <li><a href="https://www.portoseguro.com.br/fale-conosco/contatos/encontre-um-corretor" className="top-link">Encontre um Corretor</a></li>
                </ul>
            </nav>
            <Botao />
        </div>
        <nav className="nav_arrow">
            <div className="nav-list">
                <ul>
                    <li className="nav-item"><a href="#" className="nav-link">Seguros</a></li>
                </ul>
                <ul>
                    <li className="nav-item"><a href="#" className="nav-link">Serviços</a></li>
                </ul>
                <ul>
                    <li className="nav-item"><a href="#" className="nav-link">Bank</a></li>
                </ul>
                <ul>
                    <li className="nav-item"><a href="#" className="nav-link">Saúde</a></li>
                </ul>
                <ul>
                    <li className="nav-item"><a href="#" className="nav-link">Categorias</a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default Cabecalho