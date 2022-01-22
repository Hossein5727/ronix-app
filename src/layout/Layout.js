import React from 'react'
import Header from '../components/header/Header'

function Layout({ children, toggleShow,toggleShowSearch }) {
    return (
        <div>
            <Header
                toggleShow={toggleShow}
                showSearch={toggleShowSearch}
            />
            {children}
        </div>
    )
}

export default Layout
