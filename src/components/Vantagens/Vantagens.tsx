import styled from 'styled-components';

const VantagensContainer = styled.div`
    padding: 20px;
    background-color: #ffffff;
    text-align: left;
`;

const Title = styled.h1`
    margin-top: 0px;
    margin-bottom: 5px;
`;

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    margin: 0 auto;
    padding: 0;
    list-style: none;
`;

const ListItem = styled.li`
    display: flex;
    font-weight: 300;
    font-size: 19px;
    margin-top: 25px;
`;

function Vantagens() {
    return (
        <VantagensContainer>
            <Title>Com o seguro para celular da Porto Seguro, você tem:</Title>
            <List>
                <ListItem>Planos que se encaixam às suas necessidades.</ListItem>
                <ListItem>Viaje com tranquilidade: sinistros ocorridos fora do Brasil estão cobertos.</ListItem>
                <ListItem>Conte com benefícios e descontos em nossos parceiros.</ListItem>
            </List>
            <List>
                <ListItem>Cobertura por até 24 meses a partir da compra do celular.</ListItem>
                <ListItem>Pague em 12x sem juros. Cancele quando quiser, sem multa.</ListItem>
                <ListItem>Compartilhe sua localização e ganhe desconto na franquia.</ListItem>
            </List>
        </VantagensContainer>
    );
}

export default Vantagens;
