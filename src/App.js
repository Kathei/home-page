import React, { useState, useEffect } from 'react'
import './App.css'
import Background from './components/Background'
import Page from './components/Page'

function App() {

  const [windowSize, setWindowSize] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

useEffect(() => {
  const handleResize = () => {
    setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      })
  }

  window.addEventListener("resize", handleResize)
  
  return () => window.removeEventListener("resize", handleResize);
});


  return (
    <div className="App">
      <Background height={windowSize.height} width={windowSize.width}/>
      <Page />
    </div>
  );
}

export default App;
