import React from 'react'
import styled from 'styled-components'
import { theme } from '../../Global.style'

export const FooterDiv = styled.div`
    background-color: ${theme.darkBackground};
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-left: 150px;
    padding-right: 150px;
    @media screen and (max-width:700px){
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 2rem; 
    }
`

export const DivInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 2rem;
`

export const DivSocials = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-evenly;
    gap: 2rem;
`
export const TwitterDiv = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    gap: 0.5rem;
    @media screen and (max-width:700px){
        flex-direction: column;
    }
`
export const TwitterLogo = styled.img`
    height: 15px;
`

export const FacebookDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    @media screen and (max-width:700px){
        flex-direction: column;
    }
`

export const FacebookLogo = styled.img`
    height: 15px;
`