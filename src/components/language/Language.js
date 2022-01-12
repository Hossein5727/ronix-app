import React from 'react'
import { languageData } from '../../data/languageData'
import { LanguageContainer, LanguageContent, ClosIcon, Title, Languages, LanguageBox, LanguageCountryImg } from './LangageElements'

function Language({ isShow, onClose }) {
    return (
        <LanguageContainer isShow={isShow} onClick={onClose}>
            <LanguageContent onClick={e => e.stopPropagation()}>
                <ClosIcon onClick={onClose} />
                <Title>Choose language</Title>
                <Languages>
                    {languageData.map(item => (
                        <LanguageBox key={item.id}>
                            <LanguageCountryImg src={item.flag} />
                            <h1>{item.title}</h1>
                        </LanguageBox>
                    ))}
                </Languages>
            </LanguageContent>
        </LanguageContainer>
    )
}

export default Language
