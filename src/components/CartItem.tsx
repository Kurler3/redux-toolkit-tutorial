
import { ChevronDown, ChevronUp } from "../icons"
import { CartItemType } from "../types/cart.types";
import { useAppDispatch } from "../redux/hooks";
import { useCallback } from 'react';
import { decreaseItemAction, increaseItemAction, removeItemAction } from "../redux/features/cart/cartSlice";


const CartItem: React.FC<CartItemType> = ({
  id,
  img,
  title,
  price,
  amount,
}) => {

  //////////////////////
  // STATE /////////////
  //////////////////////

  const appDispatch = useAppDispatch();


  //////////////////////
  // FUNCTIONS /////////
  //////////////////////

  // HANDLE REMOVE ITEM
  const handleRemoveItem = useCallback(() => {
    appDispatch(removeItemAction(id))
  } ,[]);

  // HANDLE INCREASE ITEM 
  const handleIncreaseItem = useCallback(() => {
    appDispatch(increaseItemAction(id));
  } ,[]);

  // HANDLE DECREASE ITEM
  const handleDecreaseItem = useCallback(() => {
    appDispatch(decreaseItemAction(id));
  }, []);

  //////////////////////
  // RENDER ////////////
  //////////////////////

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button onClick={handleRemoveItem} className="remove-btn">Remove</button>
      </div>
      <div>
        <button onClick={handleIncreaseItem} className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button onClick={handleDecreaseItem} className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem;