import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { cartContainerDataSelector } from '../redux/features/cart/cart.selectors';

import { useAppDispatch } from '../redux/hooks';
import { useCallback } from 'react';
import { clearCartAction } from '../redux/features/cart/cart.slice';
import { openModal } from '../redux/features/modal/modal.slice';

const CartContainer: React.FC = () => {

  ////////////////////////////////
  // STATE ///////////////////////
  ////////////////////////////////

  const appDispatch = useAppDispatch();

  const {
    cartItems,
    amount,
    total
  } = useSelector(cartContainerDataSelector);

  ///////////////////////////
  // FUNCTIONS //////////////
  ///////////////////////////

  const handleOpenModal = useCallback(() => {
    appDispatch(openModal());
  }, []);


  ///////////////////////////
  // RENDER /////////////////
  ///////////////////////////

  if( amount < 1 ) {

    return (
        <section className='cart'>
            {/* CART HEADER */}
            <header>
                <h2>Your bag</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
        </section>
    )

  }

  return (
    <section className='cart'>
        <header>
            <h2>Your bag</h2>
        </header>
        <div>
            {
                cartItems.map((cartItem) => {
                    return (
                        <CartItem 
                            key={`cart_item_${cartItem.id}`}
                            {...cartItem}
                        />
                    )
                })
            }
        </div>
        <footer>
            <hr />
            <div className='cart-total'>
                <h4>total <span>${total.toFixed(2)}</span></h4>
            </div>
            <button className='btn clear-btn' onClick={handleOpenModal}>
                Clear Cart
            </button>
        </footer>
    </section>
  )
}

export default CartContainer;