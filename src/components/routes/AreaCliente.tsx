import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled Components
const Header = styled.header`
    img {
        height: 32px;
        width: 130px;
        margin-top: 10px;
        margin-left: 10px;
    }
`;

const Acesso = styled.div`
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f5f5f5;
`;

const Container = styled.div`
    background-color: #fff;
    padding: 50px;
    border-radius: 8px;
    border: 1px solid #bdbdbd8f;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const BackArrow = styled.div`
    color: #007bff;
    margin-bottom: 20px;

    a {
        text-decoration: none;
        color: inherit;
    }

    i {
        font-size: 24px;
    }
`;

const Heading = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 97%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
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

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    .button-icon {
        font-size: small;
    }
`;

const Options = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    p {
        margin-left: 40px;
    }

    a {
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

// Component
const AreaCliente = () => {
    return (
        <div>
            <Header>
                <img src="../img/logo.png" alt="Logo PORTO" />
            </Header>
            <Acesso>
                <Container>
                    <BackArrow>
                        <Link to="/">
                            <i className="fa-solid fa-arrow-left"></i>
                        </Link>
                    </BackArrow>
                    <Heading>Acessar Conta</Heading>
                    <Paragraph>Preencha seus dados de acesso para continuar.</Paragraph>
                    <Input type="text" placeholder="CPF ou CNPJ" />
                    <Button type="button" disabled>
                        Entrar <span className="button-icon">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </Button>
                    <Options>
                        <label>
                            <input type="checkbox" /> Lembrar meu CPF para próximos acessos.
                        </label>
                        <p>Ainda não tem sua conta Porto Seguro?
                            <Link to="/criarconta"> Crie uma agora mesmo :)</Link>
                        </p>
                    </Options>
                </Container>
            </Acesso>
        </div>
    );
}

export default AreaCliente;
