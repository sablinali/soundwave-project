import React from 'react'
import 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { H1 } from '../Homepage/Homepage.style'
import { CoversImg, DiscoverContainer, DiscoverIcons, IconDiv, IconImg } from './Discover.style'
import Charts from '../../assets/microphone.svg'
import Albums from '../../assets/albums.svg'
import More from '../../assets/more.svg'
import Covers from '../../assets/covers.jpg'

type Props = {}

const Discover = (props: Props) => {
  return (
    <>
      <DiscoverContainer>
        <div>
            <DiscoverIcons>
                <H1>Discover new music</H1>

                <IconDiv>
                    <IconImg src={Charts} />
                    <p>Charts</p>
                </IconDiv>

                <IconDiv>
                    <IconImg src={Albums} />
                    <p>Albums</p>
                </IconDiv>

                <IconDiv>
                    <IconImg src={More} />
                    <p>More</p>
                </IconDiv>

            </DiscoverIcons>

        </div>   

            <CoversImg src={Covers}/>

    </DiscoverContainer>

    <Footer />
    </>
  )
}

export default Discover