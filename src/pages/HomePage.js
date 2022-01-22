import React, { useState } from 'react'
import Blogs from '../components/blogs/Blogs'
import Desc from '../components/description/Desc'
import Hero from '../components/hero/Hero'
import Language from '../components/language/Language'
import Tools from '../components/tools/Tools'
import PictureData from '../components/pictureData/PictureData'
import { blogData } from '../data/blogData'
import { newsData } from '../data/newsData'
import SearchBox from '../common/search/SearchBox'

function HomePage({ isShow, toggleClose, isShowSearch, toggleCloseSearch }) {
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
            <PictureData />
            <Blogs {...newsData} />
            <SearchBox
                isShow={isShowSearch}
                toggleCloseSearch={toggleCloseSearch}
            />
        </div>
    )
}

export default HomePage
