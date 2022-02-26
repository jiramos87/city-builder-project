import './App.css'
import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const River = () => {
  return(
    <div className='river-container bg-blue'>
      
    </div>
  )
}

const City = (props) => {
  return(
    <div className='city-container bg-grey rounded' style={{height: props.size, width: props.size}}>

    </div>
  )
}

const GameTime = (props) => {
  return(
    <div className='time-container bg-white rounded'>
      Year: {props.time}
    </div>
  )
}

const App = () => {
  const [gameYear, setGameYear] = useState(0)
  const [citySize, setCitySize] = useState(1)
  
  setTimeout(
    () => {
      setCitySize(citySize + 1)
      setGameYear(gameYear + 1)
    }, 
    5000
  )


  return (
    <div className="game-container bg-green">
      <GameTime time={gameYear} />
      <River />
      <City size={citySize} />
    </div>
  )
}

export default App
