import React, { useState } from 'react'
import './App.css'

function App() {

  const [click, setClick] = useState(true)
  console.log(click)

  const clickButton = () => {
    setClick(false)
  }

  const clickAutoChange = () => {
    setClick(!click)
  }

  const clickButtonRed = () => {
    setClick(true)
  }


  return (
    <>
      <div
        style={{
          display: 'flex-direction: row'
        }}
      >
        <div
          style={{
            backgroundColor: '#ff9500',
            width: '100%',
            height: '10vh',
          }}
        >
          <div style={{
            gap: '20px',
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
            width: '100%',
            height: '10vh',
          }}>
            <div> Dashboard</div>
            <div> Dashboard</div>
            <div> Dashboard</div>
            <div> Dashboard</div>
            <div> Dashboard</div>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#000', width: '100%', height: '90vh', color: "#fff", fontWeight: "900" }}
        >
          <div style={{ padding: "20px" }}>
            <div>Dashboard</div>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
