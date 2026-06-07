import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
import img1 from './andrea-davis-dhJ-99yCtB8-unsplash.jpg';
import img2 from './zongnan-bao-kLTqQ5b8pRc-unsplash.jpg';

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout