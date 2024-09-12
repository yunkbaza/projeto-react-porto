import GlobalStyles from './GlobalStyles'; // Importa os estilos globais
import Cabecalho from './components/Cabecalho/Cabecalho';
import Conteudo from './components/Conteudo/Conteudo';
import Footer from './components/Footer/Footer';
import Vantagens from './components/Vantagens/Vantagens';

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <Cabecalho />
      <hr />
      <Conteudo />
      <hr />
      <Vantagens />
      <hr />
      <Footer />
    </div>
  );
}
