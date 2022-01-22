import React from 'react'
import { footerIcons, footerLinkData } from '../../data/footerLinkData'
import { FooteLinkItem, FooterContainer, FooterContent, FooterIcon, FooterList, FooterListIcons } from './FooterElements'

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterList>
                    {footerLinkData.map(item => (
                        <FooteLinkItem key={item.id}>
                            {item.title}
                        </FooteLinkItem>
                    ))}
                </FooterList>
                <FooterListIcons>
                    {footerIcons.map(item => (
                        <FooterIcon key={item.id}>
                            {item.icon}
                        </FooterIcon>
                    ))}
                </FooterListIcons>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer
