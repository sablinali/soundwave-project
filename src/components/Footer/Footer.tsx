import React from 'react'
import { FooterDiv, DivInfo, DivSocials, TwitterLogo, TwitterDiv, FacebookDiv, FacebookLogo } from './Footer.style'
import Twitter from '../../assets/twitter.svg'
import Facebook from '../../assets/facebook.svg'

type Props = {}

const Footer = (props: Props) => {
  return (
    <FooterDiv>

      <DivInfo>
        <p>About Us</p>
        <p>Contact</p>
      </DivInfo>
      <DivSocials>
        <TwitterDiv>
          <TwitterLogo src={Twitter} alt='logo of twitter'></TwitterLogo>
          <p>Twitter</p>
        </TwitterDiv>
        <FacebookDiv>
          <FacebookLogo src={Facebook} alt='logo of facebook'></FacebookLogo>
          <p>Facebook</p>
        </FacebookDiv>
      </DivSocials>

    </FooterDiv>
  )
}

export default Footer