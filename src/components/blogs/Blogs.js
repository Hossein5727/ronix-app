import React from 'react'
import { BLogsContainer, BlogsContainer, BLogsContent, Desc, ImageContainer, Title } from './BlogsElements'
import ImageGallery from 'react-image-gallery';
import Image1 from '../../assets/images/blog1.jpg'

function Blogs({ images, title, desc }) {
    return (
        <BlogsContainer>
            <BLogsContent img={Image1}>
                <ImageContainer>
                    <ImageGallery
                        lazyLoad={true}
                        showBullets={true}
                        items={images}
                    />
                </ImageContainer>
                <BLogsContainer>
                    <Title>{title}</Title>
                    <Desc>{desc}</Desc>
                </BLogsContainer>
            </BLogsContent>
        </BlogsContainer>
    )
}

export default Blogs
