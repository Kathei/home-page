import React from 'react'
import Row from './Row'


const Background = props => {

    const {width, height } = props

    const squareWidth = width/9
    const squareRowLength = 9
    const rows = Math.round(height/squareWidth)
    const rowArray = []

    let i = 0
    for (i; i<rows; i++) {
        rowArray.push(<Row number={i} length={squareRowLength} squareWidth={squareWidth} />)
    }

    return <div>{rowArray}</div>
    
}

export default Background