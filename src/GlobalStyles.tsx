// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
  }

  hr {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    header img {
      margin-bottom: 15px;
    }

    #top {
      flex-direction: column;
      align-items: center;
    }

    .nav_bar {
      flex-direction: column;
      align-items: center;
    }

    .nav_bar li {
      margin: 10px 0;
    }

    .btn_login {
      margin-left: 0;
    }

    .conteudo, .conteudo2 {
      padding: 40px 20px;
    }

    .fotos img {
      margin: 0 10px 30px;
    }

    footer .footer_content {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
`;

export default GlobalStyles;
