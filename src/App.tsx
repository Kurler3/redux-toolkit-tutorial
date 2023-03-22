import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import CartContainer from './components/CartContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <NavBar />

      <CartContainer />
    </main>
  )
}

export default App
