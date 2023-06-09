import React from 'react'
import styled from 'styled-components'
import  {GlobalStyles, theme}  from '../../Global.style'


export const JoinContainer = styled.div`
   width: 80vw;
   height: 80vh;
   display: flex;
   margin-left: 100px;
   @media screen and (max-width: 700px){
    margin-left: 2rem;
    display: flex;
   }
`

export const H1Join = styled.h1`
    font-size: 50px;
`

export const Form = styled.form`
    
`

export const SpanColoured = styled.h1`
    color: ${theme.accentText};
    font-size: 50px;
`