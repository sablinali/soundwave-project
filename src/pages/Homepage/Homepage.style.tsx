import React from 'react'
import styled from 'styled-components'
import  {GlobalStyles}  from '../../Global.style'


export const HomeContainer = styled.section`
   width: 80vw;
   height: 80vh;
   display: flex;
   justify-content: space-evenly;
   margin-left: 100px;
   @media screen and (max-width:700px){
        margin-left: 2rem;
    }
  
`
export const GirlImg = styled.img`
    width: 30vw;
    @media screen and (max-width:700px){
        display: none;
    }
`
export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    
`
export const H3= styled.h1`
    font-size: 45px;
`
export const Ptext= styled.p`
    font-size: 15px;
`
export const GirlDiv = styled.div`
    display: flex;
    align-items: end;
`