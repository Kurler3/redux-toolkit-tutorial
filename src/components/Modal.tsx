import { useCallback } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { closeModal } from '../redux/features/modal/modal.slice';
import { clearCartAction } from '../redux/features/cart/cart.slice';



const Modal = () => {
    
    ////////////////////////////////////
    // STATE ///////////////////////////
    ////////////////////////////////////

    const appDispatch = useAppDispatch();

    ////////////////////////////////////
    // FUNCTIONS ///////////////////////
    ////////////////////////////////////

    // HANDLE CLOSE MODAL
    const handleCloseModal = useCallback(() => {
        appDispatch(closeModal());
    }, []); 

    // HANDLE CLEAR ITEMS
    const handleClearItems = useCallback(() => {

        // CLEAR ITEMS  
        appDispatch(clearCartAction());

        // CLOSE MODAL
        appDispatch(closeModal());

    },[]);

    ////////////////////////////////////
    // RENDER //////////////////////////
    ////////////////////////////////////

    return (
        <aside className="modal-container">
            <div className="modal">
                <h4>Remove all items from your shopping cart</h4>
                <div className="btn-container">
                    <button onClick={handleClearItems} type="button" className="btn confirm-btn">
                        confirm
                    </button>
                    <button className="btn clear-btn" type="button" onClick={handleCloseModal}>
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal