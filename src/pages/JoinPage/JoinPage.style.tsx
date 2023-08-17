import React from 'react'
import styled from 'styled-components'
import  {GlobalStyles, theme}  from '../../Global.style'


export const JoinContainer = styled.div`
   width: 80vw;
   height: 80vh;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   margin-left: 100px;
   @media screen and (max-width: 700px){
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
   }
`

export const H1Join = styled.h1`
    font-size: 50px;
`

export const Form = styled.form`
    background-color:'#211f27';
    min-width: 500px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 50px; 
    border-radius: 15px;
    @media screen and (max-width:700px){
        min-width: 350px;
        padding: 30px 50px
    }
`

export const SpanColoured = styled.h1`
    color: ${theme.accentText};
    font-size: 50px;
`