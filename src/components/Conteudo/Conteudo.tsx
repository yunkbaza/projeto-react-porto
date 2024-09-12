import styled from 'styled-components';
import Time from '../Time/Time';

const ConteudoContainer = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #00a1fc;
    color: #ffffff;
    text-align: left;
`;

const ConteudoTitle = styled.h1`
    font-size: 55px;
    margin: 0 0 20px 0; 
`;

const ConteudoText = styled.p`
    font-size: 32px;
    font-weight: 400;
    margin: 0; 
`;

function Conteudo() {
    return (
        <ConteudoContainer>
            <ConteudoTitle>THE TEAM</ConteudoTitle>
            <ConteudoText>
                O grupo do Challenge é composto por estudantes com foco na criatividade, determinação e proatividade
                para implementação de tecnologias front-end inovadoras e melhores práticas de design, nesse desafio tão
                importante que a Porto nos encaminhou.
            </ConteudoText>
            <Time />
        </ConteudoContainer>
    );
}

export default Conteudo;
