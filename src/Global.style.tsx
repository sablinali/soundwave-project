import styled, { createGlobalStyle } from "styled-components";

export const theme = {
    whiteText: '#ffffff', 
}

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');

    *{
        background-color: #2F303A;
        text-decoration: none;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        color: white;
        font-family: 'Poppins', sans-serif; 
    }

    body{
        color: ${theme.whiteText};
       
    }

    /* #root{
        margin: auto;
    } */

   
`


