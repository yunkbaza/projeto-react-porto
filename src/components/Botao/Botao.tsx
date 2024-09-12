import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BtnLogin = styled.div`
    display: flex;
    padding: 10px 20px;
`;

const BtnBar = styled.ul`
    letter-spacing: 0.6px;
    border-radius: 4px;
    width: 150px;
    height: 32px;
    border: 1px solid #0046c0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
`;

const StyledLink = styled(Link)`
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    color: #0046c0;
`;

function Botao() {
    return (
        <BtnLogin>
            <BtnBar>
                <li>
                    <StyledLink to="/areacliente">Área do Cliente</StyledLink>
                </li>
            </BtnBar>
        </BtnLogin>
    );
}

export default Botao;
