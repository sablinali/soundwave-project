import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Form, H1Join, JoinContainer, SpanColoured } from './JoinPage.style'


type Props = {}

const Join = (props: Props) => {
  return (
    <>
    <JoinContainer>
      <H1Join>Join the <SpanColoured>fun.</SpanColoured></H1Join>

      <Form>
        
      </Form>

    </JoinContainer>
    <Footer />
    </>
  )
}

export default Join