import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Form, H1Join, JoinBlueCircle, JoinContainer, JoinPinkCircle, SpanColoured } from './JoinPage.style'
import  { LargeJoinButton } from '../../components/JoinButton/JoinButton'


type Props = {}

const Join = (props: Props) => {
  return (
    <>
    <JoinPinkCircle></JoinPinkCircle>
    <JoinBlueCircle></JoinBlueCircle>
    <JoinContainer>
      <H1Join>Join the <SpanColoured>fun.</SpanColoured></H1Join>

      <Form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"></input>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password"></input>
      <br></br>
      <LargeJoinButton/>
      </Form>

    </JoinContainer>
    <Footer />
    </>
  )
}

export default Join