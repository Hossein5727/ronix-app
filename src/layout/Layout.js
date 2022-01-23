import React from 'react'
import DropDown from '../components/dropDown/DropDown'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function Layout({ children, toggleShow, toggleShowSearch, toggleShowDrop, showDrop, toggleCloseDrop }) {
    return (
        <div className='overflow-x-hidden'>
            <Header
                toggleShow={toggleShow}
                showSearch={toggleShowSearch}
                toggleShowDrop={toggleShowDrop}
            />
            <DropDown
                showDrop={showDrop}
                toggleCloseDrop={toggleCloseDrop}
            />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
