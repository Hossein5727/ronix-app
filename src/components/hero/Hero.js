import React, { useEffect, useState } from 'react'
import { heroData } from '../../data/heroData'
import { HeroBgContent, HeroBox, HeroBoxImg, HeroContainer, HeroContent, HeroTitle, NextSlide, PrevSlide } from './HeroElements'

function Hero() {

    const [current, setCurrent] = useState(1)
    const lengthImage = heroData.length

    const nextSlide = () => {
        if (current < lengthImage) setCurrent(current + 1)
        if (current === lengthImage) setCurrent(1)
    }

    const prevSlide = () => {
        if (current !== 1) setCurrent(current - 1)
        if (current === 1) setCurrent(lengthImage)
    }


    useEffect(() => {
        console.log(current);
    }, [current])

    return (
        <HeroContainer>
            <HeroContent>
                {heroData.map(item => (
                    <div key={item.id}>
                        {item.id === current && (
                            <HeroBox >
                                <HeroBoxImg className='animate__animated  animate__fadeIn animate__slow' src={item.img} />
                                <HeroBgContent className='animate__animated animate__pulse' src={item.img} />
                                <HeroTitle className='animate__animated animate__pulse'>{item.title}</HeroTitle>
                                <NextSlide onClick={nextSlide} />
                                <PrevSlide onClick={prevSlide} />
                            </HeroBox>
                        )}
                    </div>
                ))}
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
