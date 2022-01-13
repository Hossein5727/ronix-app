import React from 'react'
import ParticleShape from '../../common/ParticleShape';
import { Button } from '../Button';
import { DescContainer, DescContent, DescDescription, DescImg, DescTitle } from './DescElements';

function Desc() {

    return (
        <DescContainer>
            <ParticleShape />
            <DescContent>
                <DescTitle>Ronix Tools Company</DescTitle>
                <DescImg
                    src={'https://ronixtools.com/_next/image?url=https%3A%2F%2Fwss.ronixtools.com%2FInternationalAssets%2Fassets%2Fimg%2Fcompany-section.jpg&w=1200&q=70'}
                    alt="Ronix"
                    loading="lazy"
                />
                <DescDescription>
                    Ronix Tools Company Ronix is an international manufacturer of technical tools and machines. Ronix was established
                    in 2004 with a revolutionary approach to producing hand and power tools; since then, Ronix has made attempts to earn its rightful
                    place among the world's most well-known tool manufacturing companies. Today, the Ronix brand is well-known globally, with over 2000
                    different tools it offers in 12 categories to the tool users. A wide range of users, including manual workers, carpenters, technicians,
                    mechanics, and electricians, as well as all homeowners who may want a basic tool, can benefit from the amazing functionality of Ronix-branded tools.
                </DescDescription>
                <Button>View More</Button>
            </DescContent>
        </DescContainer>
    )
}

export default Desc
