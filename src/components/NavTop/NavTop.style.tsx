import React from 'react'
import styled from 'styled-components'


export const LogoImg = styled.img`
     height: 60px;
    @media screen and (max-width:700px){
        height: 50px
    }
    z-index: 999;
`

export const Nav = styled.div`
    z-index: 999;
    width: 100vw;
    height: 100px;
    display: flex;
    align-content: center;
    align-items: center;
    /* position: fixed; */

`

export const Div1 = styled.div`
    width: 50vw;
    height: 50px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    
    @media screen and (max-width:700px){
        display: flex;
        justify-content: space-around;
    }
    
`

export const Div2 = styled.div`
    width: 50vw;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    gap: 14px;
    @media screen and (max-width:700px){
        display: flex;
        justify-content: space-around;
    }
`