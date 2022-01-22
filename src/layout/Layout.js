import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function Layout({ children, toggleShow, toggleShowSearch }) {
    return (
        <div>
            <Header
                toggleShow={toggleShow}
                showSearch={toggleShowSearch}
            />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
