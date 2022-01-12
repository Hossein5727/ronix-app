import React from 'react'
import { ToolBg, ToolBox, ToolsContainer, ToolsContent, ToolsLeftColumn, ToolsRightColumn } from './ToolsElements'
import { toolsData } from '../../data/toolsData'

function Tools() {
    return (
        <ToolsContainer>
            <ToolsContent>
                <ToolsLeftColumn>
                    {toolsData.map(item => (
                        <ToolBox key={item.id}>
                            <img className src={item.img}
                                alt={item.title} />
                            <h1>{item.title}</h1>
                        </ToolBox>
                    ))}
                </ToolsLeftColumn>
                <ToolsRightColumn>
                    <h1>Ronix</h1>
                    <h2>Wide range of variety and quality</h2>
                    <p>
                        Maintaining standards, utilizing state-of-the-art technology and
                        employing state-of-the-art specialists, Ronix has produced more
                        than 2,000 types of industrial tools and 24,000 quality accessories
                        and offered them to the tool market with extensive after-sales service
                        and fair pricing. All Ronix tools are classified into 10 main groups,
                        including power tools, hand tools, rechargeable, pneumatic and gasoline
                        tools, lighting, precision and measuring tools, safety equipment, hand
                        tools, bags and toolboxes and accessories. .
                    </p>
                </ToolsRightColumn>
            </ToolsContent>
        </ToolsContainer>
    )
}

export default Tools
