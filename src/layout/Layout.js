import React from 'react'
import Header from '../components/header/Header'

function Layout({ children, toggleShow }) {
    return (
        <div>
            <Header toggleShow={toggleShow} />
            {children}
        </div>
    )
}

export default Layout
