import { createGlobalStyle, css } from 'styled-components';

// Define global styles
export const GlobalStyles = createGlobalStyle`
    li {
        margin-bottom: 12px;
        padding-left: 0;
    }
    
    ul {
        padding-left: 32px;
    }

    .folder, button {
        cursor: pointer;
    }

`;
