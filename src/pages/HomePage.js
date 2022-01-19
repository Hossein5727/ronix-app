import React, { useState } from 'react'
import Blogs from '../components/blogs/Blogs'
import Desc from '../components/description/Desc'
import Hero from '../components/hero/Hero'
import Language from '../components/language/Language'
import Tools from '../components/tools/Tools'
import { blogData } from '../data/blogData'
import { newsData } from '../data/newsData'

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
            <Blogs {...blogData} />
            <Blogs {...newsData} />
        </div>
    )
}

export default HomePage
