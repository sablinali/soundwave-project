import styled from 'styled-components'
import { theme } from '../../Global.style'

export const StyledJoinButton = styled.button`
    background-color: ${theme.buttonBackground};
    font-size: medium;
    font-weight: 200;
    padding: 1rem 2rem;
    border-radius: 10px;
    display: flex;
    inline-size: fit-content;
    margin-left: 0;
    &:hover {
        background-color: ${theme.generalBackground};
    }
    &:focus {
        background-color: ${theme.buttonFocus};
    }
`