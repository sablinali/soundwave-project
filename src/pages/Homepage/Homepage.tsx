import React from 'react'
import girl from '../../assets/girl.png'
import JoinButton from '../../components/JoinButton/JoinButton'
import { BigBlueBubble, BlueBubble, GirlDiv, GirlImg, H1, HomeContainer, PinkBubble, Ptext, TextDiv } from './Homepage.style'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <HomeContainer>

          <PinkBubble></PinkBubble>
          <BlueBubble></BlueBubble>
          <BigBlueBubble></BigBlueBubble>
          <GirlDiv>
              <GirlImg src={girl} alt='a girl listening to music'/>
          </GirlDiv>

          <TextDiv>
             <H1>Feel The Music</H1>
            <Ptext>Stream over 20 thousand songs with one click</Ptext>
            <JoinButton/>
          </TextDiv>
    </HomeContainer>
  )
}

export default Homepage