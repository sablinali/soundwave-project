import React from 'react'
import styled from 'styled-components'
import  {GlobalStyles}  from '../../Global.style'

export const DiscoverContainer = styled.section`
   width: 80vw;
   height: 80vh;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   margin-left: 100px;
   /* background-color: red; */
   @media screen and (max-width:700px){
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
    }
  
`

export const TextIconsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`

export const DiscoverIcons = styled.div`
    display: flex;
    justify-content: space-around;
    /* background-color: green; */
`
export const IconDiv = styled.div`
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #202027;
    
`
export const CoversImg = styled.img`
    height: 300px;
    @media screen and (max-width: 700px){
        height: 200px;
    }
`

export const IconImg = styled.img`
    width: 30px;
    @media screen and (max-width: 700px){
    height: 25px;
    }
`

