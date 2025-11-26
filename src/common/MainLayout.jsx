import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {

    const [mobileNav, setmobileNav] = useState(false)
    return (
        <>

            <Header mobileNav={mobileNav} setmobileNav={setmobileNav} />
            <Outlet context={{mobileNav,setmobileNav}} />
            <Footer />

        </>
    )
}
