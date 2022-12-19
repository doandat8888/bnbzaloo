import React from 'react'
import { Text } from 'zmp-framework/react'



export const Chip = (props) => {
    const {text, csscolor} = props
    const _class = csscolor + ' chip'
    return (
        <div className={_class} >
            <Text>{text}</Text>
        </div>
    )
}

Chip.displayName = 'bnb-chip'

export default Chip
