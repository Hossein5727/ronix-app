import React from 'react'
import { Button } from '../../components/Button'
import { CloseBtn, Input, SearchBoxContainer, SearchBoxContent, SearchBoxHeader } from './SearchBoxElements'

function SearchBox({ isShow, toggleCloseSearch }) {
    return (
        <SearchBoxContainer isShow={isShow} onClick={toggleCloseSearch}>
            <div onClick={e => e.stopPropagation()}>
                <SearchBoxHeader>
                    <CloseBtn onClick={toggleCloseSearch} />
                    <p className='text-center ml-24 text-white text-xl'>Product Search On Ronix Site</p>
                </SearchBoxHeader>
                <SearchBoxContent>
                    <Input placeholder='Enter Your Search' />
                    <Button forSearch>Search</Button>
                </SearchBoxContent>
            </div>
        </SearchBoxContainer>
    )
}

export default SearchBox
