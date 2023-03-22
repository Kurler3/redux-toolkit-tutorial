import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Modal />
      <NavBar />
      <CartContainer />
    </main>
  )
}

export default App
