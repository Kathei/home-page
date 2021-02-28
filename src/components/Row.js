import React from 'react'
import Square from './Square'

const Row = props => {
    const { number, length, squareWidth } = props
    const style = {
        display: "flex",
        flexDirection: "row"
    }

    let startsWithBlack = false
    if (number % 2 === 0) {
        startsWithBlack = true
    }
    const squares = []

    const white = "#fff"
    const black = "#000"
    let color

    for (let i = 0; i < length; i++) {
        if (startsWithBlack) {
            if (i % 2 === 0) {
                color = black
            }
            else {
                color = white
            }
        }
        else {
            if (i % 2 === 0) {
                color = white
            }
            else {
                color = black
            }
        }
        squares.push(<Square key={i} color={color} width={squareWidth}/>)
    }

return (
    <div style={style}>
        {squares}
    </div>
)
}

export default Row