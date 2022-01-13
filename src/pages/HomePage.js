import React, { useState } from 'react'
import Desc from '../components/description/Desc'
import Hero from '../components/hero/Hero'
import Language from '../components/language/Language'
import Tools from '../components/tools/Tools'

function HomePage({ isShow, toggleClose }) {
    return (
        <div className='overflow-y-hidden overflow-x-hidden'>
            <Hero />
            <Tools />
            <Language
                isShow={isShow}
                onClose={toggleClose}
            />
            <Desc />
        </div>
    )
}

export default HomePage
