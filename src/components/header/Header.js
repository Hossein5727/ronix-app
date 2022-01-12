import React from 'react'
import { navBoxData } from '../../data/navBoxData'
import { NavBox, NavContainer, NavContent, NavIcon, NavLanguage, NavLeftColumn, NavLogoBox, NavLogoImg, NavRightColumn } from './HeaderElements'

function Header({ toggleShow }) {
    return (
        <NavContainer className=''>
            <NavContent>
                <NavLeftColumn>
                    <NavLanguage onClick={toggleShow} />
                </NavLeftColumn>
                <NavRightColumn>
                    {navBoxData.map(item => (
                        <NavBox key={item.id}>
                            <p>{item.title}</p>
                            <NavIcon>{item.icon}</NavIcon>
                        </NavBox>
                    ))}
                    <NavLogoBox to="/">
                        <NavLogoImg
                            src='https://wss.ronixtools.com/InternationalAssets/assets/img/general-img/Ronix-Logo.png'
                            alt='ronix'
                        />
                    </NavLogoBox>
                </NavRightColumn>
            </NavContent>
        </NavContainer>
    )
}

export default Header
