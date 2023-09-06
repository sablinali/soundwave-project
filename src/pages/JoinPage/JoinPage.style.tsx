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
    background-color: #202027;
    min-width: 500px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 50px; 
    border-radius: 15px;
    @media screen and (max-width:700px){
        min-width: 350px;
        padding: 30px 50px;
        background-color:#202027;
        margin-left: 5%;
       
    }
`

export const SpanColoured = styled.h1`
    color: ${theme.accentText};
    font-size: 50px;
`

export const JoinPinkCircle = styled.div`
    background-color: #bc3a801a;
    width: 800px; 
    height: 800px; 
    border-radius: 50%; 
    position: fixed; 
    bottom: 0%; 
    left: -17%;
    z-index: -1;
    @media screen and (max-width:1700px){
        width: 500px;
        height: 500px;
    }
    @media screen and (max-width: 700px) {                                         
        width: 150px;
        height: 150px;
    }
`
export const JoinBlueCircle = styled.div`
    background-color: #3457b21a;
    width: 700px; 
    height: 700px; 
    border-radius: 50%; 
    position: fixed; 
    top: -3%; 
    left: 22%;
    z-index: -1;
    @media screen and (max-width:1700px){
        width: 400px;
        height: 400px;
    }
    @media screen and (max-width: 700px) {                                         
        width: 120px;
        height: 120px;
    }
`