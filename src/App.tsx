import './App.css'
import NavBar from './components/NavBar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'

import { useAppSelector, useAppDispatch } from './redux/hooks'
import { isModalOpenSelector } from './redux/features/modal/modal.selectors'
import { cartItemsAndLoadingSelector } from './redux/features/cart/cart.selectors';
import { useEffect } from 'react'
import { getCartItems } from './redux/features/cart/cart.slice'

function App() {

  const appDispatch = useAppDispatch();

  // IS MODAL OPEN
  const isModalOpen = useAppSelector(isModalOpenSelector);

  // CART ITEMS AND IS LOADING
  const {
    cartItems,
    isLoading
  } = useAppSelector(cartItemsAndLoadingSelector);


  // FETCH CART ITEMS
  useEffect(() => {
    appDispatch(getCartItems());
  }, []);

  console.log("CART ITEMS AND LOADING: ", cartItems, isLoading)

  // IF LOADING 
  if(isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  // ELSE
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
