import React from 'react'

const Page = () => {



const style = {
    backgroundColor: 'RGBA(255,255,255,0.98)',
    margin: 10, 
    padding: 80,
    position: 'absolute',
    top: 50,
    left: '50%',
    transform: "translate(-50%, 0)",
    textAlign: 'center',
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const textStyle = {
    maxWidth: 500,
    marginTop: 20
}

const linkStyle = {
    color: 'black',
    textDecoration: 'underline',
    fontWeight: 'bold'
}

return (<div style={style}>
    <h1>Hello there!</h1>
    <div style={textStyle}>This site is still under construction. In the meantime, go and download Carbon Donut for <a style={linkStyle} href="https://apps.apple.com/fi/app/carbon-donut/id1489241028" target="_blank" rel="noreferrer">iOS</a> or <a style={linkStyle} href="https://play.google.com/store/apps/details?id=com.sparksustainability.thedonut" target="_blank" rel="noreferrer">Android</a>.</div>
</div>
)
}

export default Page