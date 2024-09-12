import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Header = styled.header`
    img {
        height: 32px;
        width: 130px;
        margin: 10px;
    }
`;

const Acesso = styled.div`
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #f5f5f5;
`;

const Container = styled.div`
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    border: 1px solid #bdbdbd;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
`;

const BackArrow = styled.div`
    color: #007bff;
    margin-bottom: 20px;

    a {
        text-decoration: none;
        color: inherit;

        i {
            font-size: 24px;
        }
    }
`;

const Heading = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
`;

const Paragraph = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 1.5;
`;

const Input = styled.input`
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    .button-icon {
        margin-left: 10px;
        font-size: 18px;
    }
`;


const CriarConta = () => {
    return (
        <div>
            <Header>
                <img src="../img/logo.png" alt="Logo PORTO" />
            </Header>
            <Acesso>
                <Container>
                    <BackArrow>
                        <Link to="/areacliente">
                            <i className="fa-solid fa-arrow-left" />
                        </Link>
                    </BackArrow>
                    <Heading>Criar Conta</Heading>
                    <Paragraph>Preencha seus dados para criar uma conta.</Paragraph>
                    <Input type="text" placeholder="CPF ou CNPJ" />
                    <Button type="button" disabled>
                        Cadastrar
                        <span className="button-icon">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </Button>
                </Container>
            </Acesso>
        </div>
    );
};

export default CriarConta;
