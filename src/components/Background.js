import React from 'react'
import Row from './Row'


const Background = props => {

    const {width, height } = props

    const styles = {
        height: height,
        overflow: "hidden"
      }

    const squareWidth = width/9
    const squareRowLength = 9
    const rows = Math.ceil(height/squareWidth)
    const rowArray = []

    let i = 0
    for (i; i<rows; i++) {
        rowArray.push(<Row number={i} length={squareRowLength} squareWidth={squareWidth} />)
    }

    return <div style={styles}>{rowArray}</div>
    
}

export default Background