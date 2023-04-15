import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavTop from '../NavTop/NavTop'


type Props = {}

const Layout = (props: Props) => {
  return (
    <>
    <NavTop/>
    <main>
       <Outlet/>
    </main>
    <Footer/>
    
    </>
  )
}

export default Layout