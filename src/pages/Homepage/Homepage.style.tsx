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
export const H1= styled.h1`
    font-size: 45px;
`
export const Ptext= styled.p`
    font-size: 15px;
`
export const GirlDiv = styled.div`
    display: flex;
    align-items: end;
`

export const PinkBubble = styled.div`
    background-color: #bc3a801a;
    width: 550px; 
    height: 550px; 
    border-radius: 50%; 
    position: fixed; 
    bottom: 10%; 
    left: 1%;
    z-index: -1;
    @media screen and (max-width:1700px){
        width: 300px;
        height: 300px;
    }
    @media screen and (max-width:700px){
        width: 100px;
        height: 100px;
    }
    
`

export const BlueBubble = styled.div`
    background-color:#3457b21a;
    width: 550px; 
    height: 550px; 
    border-radius: 50%; 
    position: fixed; 
    top: 15%; 
    left: 27%; 
    z-index: -1;
    @media screen and (max-width:1700px){
        width: 300px;
        height: 300px;
        bottom: -10%; 
        right: -10%;
    }
    @media screen and (max-width:700px){
        width: 100px;
        height: 100px;
    }
`

export const BigBlueBubble = styled.div`
    background-color:#3457b21a;
    width: 1200px; 
    height: 1200px; 
    border-radius: 50%; 
    position: fixed; 
    bottom: -60%; 
    right: -20%;
    z-index: -1;
    @media screen and (max-width:1700px){
        width: 600px;
        height: 600px;
        bottom: -10%; 
        right: -10%;
    }
    @media screen and (max-width:700px){
        width: 200px;
        height: 200px;
        bottom: -10%; 
        right: -20%;
    }
    
`