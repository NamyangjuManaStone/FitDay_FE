import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = css`
  ${reset};

  * {
    box-sizing: border-box;
  }

  body {
    width: 1440px;
    margin: 0 auto;
    background-color: white;
    line-height: 1.4;
    font-family: Noto Sans, Noto Sans KR;
    color: #333;

    hr {
      border: solid 1px #f2f1f8;
      width: 100%;
      margin: 20px auto;
    }

    textarea {
      resize: none;
    }
  }

  button {
    text-decoration: none;
    border: 0;
    cursor: pointer;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
