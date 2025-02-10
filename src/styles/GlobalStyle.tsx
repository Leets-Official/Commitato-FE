import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    body {
        background-color: ${({ theme }) => theme.COLORS.yellow[100]};
        overflow-x: hidden;
        overflow-y: auto;
        height: 80vh;
        width: 100%;

    }

    ::-webkit-scrollbar {
        width: 15px;
        height: 12px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.black};
        border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.yellow[100]};
        border-radius: 6px;
        border: 3px solid #000;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.COLORS.yellow[200]};
    }

    @font-face {
        font-family:"Staatliches-Regular" ;
        src: url("fonts/Staatliches-Regular.woff") format("woff");
    }
    @font-face {
        font-family:"Pretendard-ExtraBold" ;
        src: url("/fonts/Pretendard-ExtraBold.woff") format("woff");
    }
    @font-face {
        font-family:"Pretendard-Regular" ;
        src: url("/fonts/Pretendard-Regular.woff") format("woff");
    }
    @font-face {
        font-family:"Pretendard-SemiBold" ;
        src: url("/fonts/Pretendard-SemiBold.woff") format("woff");
    }
    @font-face {
        font-family:"Pretendard-Bold" ;
        src: url("/fonts/Pretendard-Bold.woff") format("woff");
    }

    
    
  `;

export default GlobalStyles;
