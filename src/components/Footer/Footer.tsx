import styled from 'styled-components';

const FooterContainer = styled.footer`
    width: 100%;
    color: #ffffff;
    background-color: #000000;
    padding: 5px 5px;
`;

const FooterContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    align-items: center;
    padding: 20px;
    text-align: left;
`;

const FooterList = styled.ul`
    list-style: none;

    h3 {
        text-align: left;
        margin-bottom: 10px;
    }
`;

const FooterList2 = styled.ul`
    list-style: none;
    margin-top: 30px;
`;

const FooterLink = styled.a`
    text-decoration: none;
    color: #a8a29e;
    transition: all 0.4s;

    &:hover {
        color: #555555;
    }
`;

const FooterContacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const FooterSocialMedia = styled.div`
    display: flex;
    justify-content: left;
    gap: 2rem;
    font-size: 30px;
    margin-top: 20px;
`;

const FooterBar = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`;

const FooterBarText = styled.p`
    text-decoration: none;
    color: #ffffff;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterList>
                    <li>
                        <h3>Links Rápidos</h3>
                    </li>
                    <li><FooterLink href="https://www.portoseguro.com.br/canal-de-ajuda/">Perguntas Frequentes</FooterLink></li>
                    <li><FooterLink href="https://www.portoseguro.com.br/fale-conosco/contatos/telefones-e-sac">SAC e Telefones</FooterLink></li>
                    <li><FooterLink href="https://www.portoseguro.com.br/fale-conosco/ouvidoria">Ouvidoria</FooterLink></li>
                    <li><FooterLink href="https://www.portoseguro.com.br/fale-conosco/contatos/canal-de-denuncia">Canal de Denúncia</FooterLink></li>
                    <li><FooterLink href="https://www.portoseguro.com.br/fale-conosco/contatos/chat">Chat Online</FooterLink></li>
                </FooterList>
                
                <FooterList>
                    <li>
                        <h3>Sobre a Porto</h3>
                    </li>
                    <li><FooterLink href="https://www.portoseguro.com.br/institucional/a-porto-seguro">A Porto Seguro</FooterLink></li>
                    <li><FooterLink href="https://www.portoseguro.com.br/institucional/instituto">Instituto Porto Seguro</FooterLink></li>
                    <li><FooterLink href="https://www.portoseguro.com.br/institucional/responsabilidade-socioambiental">Responsabilidade Socioambiental</FooterLink></li>
                    <li><FooterLink href="https://www.portoseguro.com.br/institucional/noticias-e-imprensa">Notícias e Imprensa</FooterLink></li>
                    <li><FooterLink href="https://blog.portoseguro.com.br">Blog</FooterLink></li>
                </FooterList>

                <FooterList2>
                    <li><FooterLink href="https://www.portoseguro.com.br/institucional/sobre-a-porto-seguro/empresas-do-grupo">Empresas do Grupo</FooterLink></li>
                    <li><FooterLink href="https://ri.portoseguro.com.br">Parceiros e Acionistas</FooterLink></li>
                    <li><FooterLink href="https://www.portoseguro.com.br/institucional/patrocinio">Patrocínio</FooterLink></li>
                    <li><FooterLink href="https://www.portoseguro.com.br/fale-conosco/trabalhe-conosco">Trabalhe Conosco</FooterLink></li>
                </FooterList2>

                <FooterContacts>
                    <img src="./img/logo_rodape.png" width="160" height="38" alt="Logo PORTO Rodapé"/>
                    <h3>Acompanhe a Porto nas redes sociais</h3>
                    <FooterSocialMedia>
                        <FooterLink href="https://www.facebook.com/portoseguro/"><i className="fa-brands fa-facebook"></i></FooterLink>
                        <FooterLink href="https://www.instagram.com/portoseguro/"><i className="fa-brands fa-instagram"></i></FooterLink>
                        <FooterLink href="https://www.linkedin.com/company/porto/"><i className="fa-brands fa-linkedin"></i></FooterLink>
                        <FooterLink href="https://www.youtube.com/portoseguro"><i className="fa-brands fa-youtube"></i></FooterLink>
                        <FooterLink href="https://twitter.com/portoseguro/"><i className="fa-brands fa-x-twitter"></i></FooterLink>
                    </FooterSocialMedia>
                </FooterContacts>
            </FooterContent>

            <hr />

            <FooterBar>
                <FooterBarText><FooterLink href="https://www.portoseguro.com.br/privacidade">Privacidade</FooterLink></FooterBarText>
                <FooterBarText><FooterLink href="https://www.portoseguro.com.br/institucional/politica-de-seguranca-da-informacao">Segurança da Informação</FooterLink></FooterBarText>
                <FooterBarText><FooterLink href="https://www.consumidor.gov.br/pages/principal/?1657894699051">PROCON</FooterLink></FooterBarText>
                <FooterBarText><FooterLink href="#">Configurações De Cookie</FooterLink></FooterBarText>
                <FooterBarText><FooterLink href="https://www.portoseguro.com.br/porto-em-um-clique">Porto Em um Clique</FooterLink></FooterBarText>
            </FooterBar>
        </FooterContainer>
    );
}

export default Footer;
