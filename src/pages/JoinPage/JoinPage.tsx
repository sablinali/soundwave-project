import React from 'react'
import Footer from '../../components/Footer/Footer'
import { H1Join, SpanColoured } from './JoinPage.style'


type Props = {}

const Join = (props: Props) => {
  return (
    <>
    <H1Join>Join the <SpanColoured>fun.</SpanColoured></H1Join>
    <Footer/>
    </>
  )
}

export default Join