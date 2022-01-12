import React, { useState } from 'react'
import Hero from '../components/hero/Hero'
import Language from '../components/language/Language'
import Tools from '../components/tools/Tools'

function HomePage({ isShow, toggleClose }) {
    return (
        <div>
            <Hero />
            <Tools />
            <Language
                isShow={isShow}
                onClose={toggleClose}
            />
        </div>
    )
}

export default HomePage
