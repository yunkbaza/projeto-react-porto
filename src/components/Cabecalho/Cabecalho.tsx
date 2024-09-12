import styled from 'styled-components';
import Botao from '../Botao/Botao';

const Header = styled.header`
    width: 100%;
`;

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

const Logo = styled.img`
    width: 143px;
    height: 34px;
    margin-top: 15px;
    margin-left: 20px;
    margin-bottom: 30px;
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: center;
`;

const TopList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    margin-top: 5px;
`;

const TopLink = styled.a`
    font-size: 15px;
    font-weight: 400;
    color: #4B4B4B;
    text-decoration: none;
    padding: 0 50px;
    &:hover {
        color: #0046c0;
    }
`;

const NavList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

const NavItem = styled.li`
    padding: 0 20px;
`;

const NavLink = styled.a`
    text-decoration: none;
    font-size: 20px;
    color: black;
    font-weight: 700;
    &:hover {
        color: #0046c0;
    }
`;

const NavArrow = styled.nav`
    display: flex;
`;

function Cabecalho() {
    return (
        <Header>
            <TopContainer id="top">
                <Logo src="../img/logo.png" alt="Logo Porto" />
                <NavBar className="nav_bar">
                    <TopList>
                        <li><TopLink href="https://www.portoseguro.com.br/institucional/sobre-a-porto-seguro">Sobre nós</TopLink></li>
                        <li><TopLink href="https://www.portoseguro.com.br/canal-de-ajuda">Ajuda</TopLink></li>
                        <li><TopLink href="https://blog.portoseguro.com.br/">Blog</TopLink></li>
                        <li><TopLink href="https://www.portoseguro.com.br/fale-conosco/contatos/encontre-um-corretor">Encontre um Corretor</TopLink></li>
                    </TopList>
                </NavBar>
                <Botao />
            </TopContainer>
            <NavArrow className="nav_arrow">
                <NavList>
                    <NavItem><NavLink href="#">Seguros</NavLink></NavItem>
                    <NavItem><NavLink href="#">Serviços</NavLink></NavItem>
                    <NavItem><NavLink href="#">Bank</NavLink></NavItem>
                    <NavItem><NavLink href="#">Saúde</NavLink></NavItem>
                    <NavItem><NavLink href="#">Categorias</NavLink></NavItem>
                </NavList>
            </NavArrow>
        </Header>
    );
}

export default Cabecalho;
