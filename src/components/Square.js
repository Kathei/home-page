import React from 'react';

const Square = props => {
   const { color, width } = props

const style = {
    backgroundColor: color,
    width: width,
    height: width
}
return <div style={style}></div>

}

export default Square