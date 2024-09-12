import "./Footer.css"

function Footer() {
    return(
        <footer>
        <div className="footer_content">
            <ul className="footer-list">
                <li>
                    <h3>Links Rápidos</h3>
                </li>
                <li><a href="https://www.portoseguro.com.br/canal-de-ajuda/" className="footer-link">Perguntas
                        Frequentes</a></li>
                <li><a href="https://www.portoseguro.com.br/fale-conosco/contatos/telefones-e-sac"
                        className="footer-link">SAC e Telefones</a></li>
                <li><a href="https://www.portoseguro.com.br/fale-conosco/ouvidoria" className="footer-link">Ouvidoria</a>
                </li>
                <li><a href="https://www.portoseguro.com.br/fale-conosco/contatos/canal-de-denuncia"
                        className="footer-link">Canal de Denúncia</a></li>
                <li><a href="https://www.portoseguro.com.br/fale-conosco/contatos/chat" className="footer-link">Chat
                        Online</a></li>
            </ul>
            <ul className="footer-list">
                <li>
                    <h3>Sobre a Porto</h3>
                </li>
                <li><a href="https://www.portoseguro.com.br/institucional/a-porto-seguro" className="footer-link">A Porto
                        Seguro</a></li>
                <li><a href="https://www.portoseguro.com.br/institucional/instituto" className="footer-link">Instituto Porto
                        Seguro</a></li>
                <li><a href="https://www.portoseguro.com.br/institucional/responsabilidade-socioambiental"
                        className="footer-link">Responsabilidade Socioambiental</a></li>
                <li><a href="https://www.portoseguro.com.br/institucional/noticias-e-imprensa"
                        className="footer-link">Notícias e Imprensa</a></li>
                <li><a href="https://blog.portoseguro.com.br" className="footer-link">Blog</a></li>
            </ul>
            <ul className="footer-list2">
                <li><a href="https://www.portoseguro.com.br/institucional/sobre-a-porto-seguro/empresas-do-grupo"
                        className="footer-link">Empresas do Grupo</a></li>
                <li><a href="https://ri.portoseguro.com.br" className="footer-link">Parceiros e Acionistas</a></li>
                <li><a href="https://www.portoseguro.com.br/institucional/patrocinio" className="footer-link">Patrocínio</a>
                </li>
                <li><a href="https://www.portoseguro.com.br/fale-conosco/trabalhe-conosco" className="footer-link">Trabalhe
                        Conosco</a></li>
            </ul>
            <div className="footer_contacts">
                <img src="./img/logo_rodape.png" width="160" height="38" alt="Logo PORTO Rodapé"/>
                <h3>Acompanhe a Porto nas redes sociais</h3>
                <div id="footer_social_media">
                    <a href="https://www.facebook.com/portoseguro/" className="footer-link">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/portoseguro/" className="footer-link">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/porto/" className="footer-link">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/portoseguro" className="footer-link">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://twitter.com/portoseguro/" className="footer-link">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
        <hr/>
        <div id="footer-bar">
            <p><a href="https://www.portoseguro.com.br/privacidade" className="footer-link2">Privacidade</a></p>
            <p><a href="https://www.portoseguro.com.br/institucional/politica-de-seguranca-da-informacao"
                    className="footer-link2">Segurança da Informação</a></p>
            <p><a href="https://www.consumidor.gov.br/pages/principal/?1657894699051" className="footer-link2">PROCON</a></p>
            <p><a href="#" className="footer-link2">Configurações De Cookie</a></p>
            <p><a href="https://www.portoseguro.com.br/porto-em-um-clique" className="footer-link2">Porto Em um Clique</a>
            </p>
        </div>
    </footer>
        
    )
    
}

export default Footer