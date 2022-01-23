import React from 'react'
import { navBoxData } from '../../data/navBoxData'
import { DropDownConatainer, DropDownContent, DropDownItem, Icon, Link, CloseBtn } from './DropDownElements'

function DropDown({ showDrop, toggleCloseDrop }) {
    return (
        <DropDownConatainer showDrop={showDrop}>
            <CloseBtn onClick={toggleCloseDrop} />
            <DropDownContent>
                {navBoxData.map(item => (
                    <DropDownItem key={item.id}>
                        <Link>{item.title}</Link>
                        <Icon>{item.icon}</Icon>
                    </DropDownItem>
                ))}
            </DropDownContent>
        </DropDownConatainer>
    )
}

export default DropDown
