import React from 'react'
import styled from 'styled-components'
import  {GlobalStyles}  from '../../Global.style'

export const DiscoverContainer = styled.section`
   width: 80vw;
   height: 80vh;
   display: flex;
   justify-content: space-evenly;
   margin-left: 100px;
   background-color: red;
   @media screen and (max-width:700px){
        margin-left: 2rem;
    }
  
`

export const DiscoverIcons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: green;
`
export const IconDiv = styled.div`
    
`
export const CoversImg = styled.img`
    height: 300px;
`

export const IconImg = styled.img`
    width: 30px;
    @media screen and (max-width: 700px){
    height: 25px;
    }
`

