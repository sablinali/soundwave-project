import styled from 'styled-components'

export const StyledJoinButton = styled.button`
    background-color: '#0451A9';
    font-size: medium;
    font-weight: 200;
    padding: 1rem 2rem;
    border-radius: 10px;
    display: flex;
    inline-size: fit-content;
    margin-left: 0;
    &:hover {
        background-color: '#2180D8';
    }
    &:focus {
        background-color: '#2796FF';
    }
`