import React from 'react'
import { navBoxData } from '../../data/navBoxData'
import { NavBox, NavContainer, NavContent, NavIcon, NavLanguage, NavLeftColumn, NavLogoBox, NavLogoImg, NavRightColumn } from './HeaderElements'

function Header({ toggleShow, showSearch }) {
    return (
        <NavContainer className=''>
            <NavContent>
                <NavLeftColumn>
                    <NavLogoBox to="/">
                        <NavLogoImg
                            src='https://wss.ronixtools.com/InternationalAssets/assets/img/general-img/Ronix-Logo.png'
                            alt='ronix'
                        />
                    </NavLogoBox>
                    {navBoxData.map(item => (
                        <NavBox key={item.id}>
                            {item.title === "Search" ? (
                                <div className='flex items-center' onClick={showSearch}>
                                    <p>{item.title}</p>
                                    <NavIcon>{item.icon}</NavIcon>
                                </div>
                            ) : (
                                <div className='flex items-center'>
                                    <p>{item.title}</p>
                                    <NavIcon>{item.icon}</NavIcon>
                                </div>
                            )}
                        </NavBox>
                    ))}
                </NavLeftColumn>
                <NavRightColumn>
                    <NavLanguage onClick={toggleShow} />
                </NavRightColumn>
            </NavContent>
        </NavContainer>
    )
}

export default Header
