import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'

import { useAppSelector } from './redux/hooks'
import { isModalOpenSelector } from './redux/features/modal/modal.selectors'

function App() {
  
  const isModalOpen = useAppSelector(isModalOpenSelector);

  return (
    <main>
      {
        isModalOpen ?
        <Modal />
        :
        null
      }
      <NavBar />
      <CartContainer />
    </main>
  )
}

export default App
