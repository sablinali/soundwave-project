import React from 'react'
import { Link } from 'react-router-dom'
import { StyledJoinButton } from './JoinButton.style'


type Props = {}

const JoinButton = (props: Props) => {
  return (
    <StyledJoinButton><Link to={'/join'}>Join Now</Link> </StyledJoinButton>
   
  )
}

export default JoinButton