import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Homepage from '../pages/Homepage/Homepage'
import DiscoverPage from '../pages/DiscoverPage/DiscoverPage'
import JoinPage from '../pages/JoinPage/JoinPage'

type Props = {}

const AppRouter = (props: Props) => {
  return (
    <>
    <BrowserRouter>   
        <Routes>
            <Route element={<Layout />} >
            <Route path="/" element={<Homepage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/join" element={<JoinPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter




