import styled, { createGlobalStyle } from "styled-components";

export const theme = {
    whiteText: '#ffffff', 
    generalBackground: '#302E3A', 
    darkBackground: '#211f27', 
    buttonBackground: '#0451A9', 
    buttonHover: '#2180D8', 
    buttonFocus: '#2796FF',
    accentText: '#D3007B'
}

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');

    

    *{
        text-decoration: none;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        color: white;
        font-family: 'Poppins', sans-serif; 
    }

    body{
        background-color: ${theme.generalBackground};
        color: ${theme.whiteText}; 
        position: relative;
    }

    #root{
        height: 100vh;
    }

   
`


